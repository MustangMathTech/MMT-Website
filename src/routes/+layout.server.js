// @ts-nocheck
import { UAParser } from 'ua-parser-js';
import { supabase } from "$lib/dbClient";
// import fetch from 'node-fetch';

function getCurrentDate() {
    const currentDate = new Date();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    return `${month}-${day}-${year}`;
}

function getKeyValueStats(logs, key) {
    const counts = {};

    logs.forEach((log) => {
        const value = log[key];
        if (counts[value]) {
            counts[value]++;
        } else {
            counts[value] = 1;
        }
    });

    const stats = Object.keys(counts).map((value) => {
        return { name: value, times: counts[value] };
    });

    return stats;
}


function getNestedKeyValueStats(logs, keys) {
    const counts = {};

    logs.forEach((log) => {
        let value = log;
        keys.forEach((key) => {
            value = value[key];
        });

        if (value) {
            if (!counts[value]) {
                counts[value] = 1;
            } else {
                counts[value]++;
            }
        }
    });

    const stats = Object.keys(counts).map((value) => {
        return { [value]: counts[value] };
    });

    return stats;
}

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
    if (locals.url.id == '/analytics') {

        let data = await supabase
            .from('analytics')
            .select('*')

        data = data.data

        const packaged_data = {
            pages: getKeyValueStats(data, 'route'),
            referrers: getKeyValueStats(data, 'referer'),
            countries: getNestedKeyValueStats(data, ['geolocation', 'country']),
            os: getNestedKeyValueStats(data, ['user_agent_info', 'os', 'name']),
            browsers: getNestedKeyValueStats(data, ['user_agent_info', 'browser', 'name'])
        }

        return packaged_data
    } else {
        const agentParser = new UAParser(locals.tracking.get('user-agent'));

        const info = {
            'referer': locals.tracking.get('referer'),
            'host': locals.tracking.get('host'),
            'connection': locals.tracking.get('connection'),
            'cache-control': locals.tracking.get('cache-control'),
            'sec-ch-ua': locals.tracking.get('sec-ch-ua'),
            'sec-ch-ua-mobile': locals.tracking.get('sec-ch-ua-mobile'),
            'sec-ch-ua-platform': locals.tracking.get('sec-ch-ua-platform'),
            'upgrade-insecure-requests': locals.tracking.get('upgrade-insecure-requests'),
            'user-agent': agentParser.getResult(),
            'accept': locals.tracking.get('accept'),
            'sec-fetch-site': locals.tracking.get('sec-fetch-site'),
            'sec-fetch-mode': locals.tracking.get('sec-fetch-mode'),
            'sec-fetch-user': locals.tracking.get('sec-fetch-user'),
            'sec-fetch-dest': locals.tracking.get('sec-fetch-dest'),
            'accept-encoding': locals.tracking.get('accept-encoding'),
            'accept-language': locals.tracking.get('accept-language'),
            'cookie': locals.tracking.get('cookie'),
            'if-none-match': locals.tracking.get('if-none-match'),
        }

        const { ua, ...userAgentInfoWithoutUA } = agentParser.getResult();

        const ipResponse = await fetch(`https://ipinfo.io/72.216.231.149/json?token=1d76af8545a64a`);
        const ipData = await ipResponse.json();

        const packaged_details = {
            date: getCurrentDate(),
            ip_addr: locals.ip,
            raw_data: {
                ...info,
                ...locals.ip
            },
            user_agent_info: userAgentInfoWithoutUA,
            referer: locals.tracking.get('referer'),
            route: locals.url.id,
            geolocation: ipData
        }

        await supabase
            .from('analytics')
            .insert([
                packaged_details
            ])

        return {}
    }
}
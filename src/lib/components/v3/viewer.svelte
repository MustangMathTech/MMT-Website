<script>
	import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';
	import { postData } from "$lib/utils";

	/**
	 * @type {(HTMLElement | null | undefined)}
	 */
	let element;

    /**
	 * @type {(boolean | null)}
	 */
    let status = false;

    let mounted = true;

    let time = 0;
    

    onMount(() => {
        time = performance.now();
        status = null;
    });

    
    const fragmentTimer = (/** @type {number} */ time, /** @type {string} */ route, /** @type {(boolean | null)} */ status) => {
        if (status) {
            callback(time, sym, id, 'user::enter')   
            mounted = false;    
        } else if (mounted) {
            
        }
        else {
            callback(time, sym, id, 'user::exit')
        }

        return performance.now()
    }

    $: time = fragmentTimer(time, route, status)

	export let id = "";
    export let route = "";

    /** @type {string} */
    export let sym;

	export let callback = (/** @type {number} */ time, /** @type {string} */ sym, /** @type {string} */ section, /** @type {string} */ message) => {
        const responseObject = {
            time: time,
            key: sym,
            event_string: message,
            body: section
        }

        console.log(responseObject);

        postData('http://localhost:8000/stream', responseObject)
    };
</script>

<IntersectionObserver {element} on:observe={(e) => {
        status = e.detail.isIntersecting;
        // status = false

        // callback(e)
    }} threshold={0.3}>
	<section id={id} bind:this={element}>
		<slot />
	</section>
</IntersectionObserver>

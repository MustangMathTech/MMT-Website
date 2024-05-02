<script>
    import { beforeNavigate } from "$app/navigation";
	import { postData } from "$lib/utils";

    beforeNavigate((navigation) => {
        var x = 200;
		var a = new Date().getTime() + x;
        
        if (navigation.to == null)
            callback(performance.now(), ident, 'page::exit')
        else
            callback(performance.now(), ident, `page::route::${navigation.to.route.id}`)

        while (new Date().getTime() < a) {}
    })

    /** @type {string} */
    export let ident;

    export let callback = (/** @type {number} */ time, /** @type {string} */ sym, /** @type {string} */ message) => {
        const responseObject = {
            time: time,
            key: sym,
            event_string: message,
            body: null
        }

        postData('http://localhost:8000/stream', responseObject, false)
    };

</script>

<div class="none" />

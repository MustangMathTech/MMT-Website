<script>
	import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';

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
        if (mounted) {
            callback(time, route, id, 'page::load')
            mounted = false;
        }
        else if (status) {
            callback(time, route, id, 'user::enter')       
        } else {
            callback(time, route, id, 'user::exit')
        }

        return performance.now()
    }

    $: time = fragmentTimer(time, route, status)

	export let id = "";
    export let route = "";
	export let callback = (/** @type {number} */ time, /** @type {string} */ route, /** @type {string} */ section, /** @type {string} */ message) => {console.log(time, route, section, message)};
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

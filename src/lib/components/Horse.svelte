<script>
    import { fade, fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let y,x;
    let  windowWidth;

    let isInView;
  

</script>
<svelte:window bind:scrollY={y} bind:scrollX={x} bind:innerWidth={windowWidth} />
<div class="scrollHorse"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:inview_change={(event) => {
  const { inView, entry, scrollDirection, observer, node} = event.detail;
  isInView = inView;
}}
>
{#if isInView}

<div class="scrollHorse" transition:fade={{delay:100, duration:300}}>
    <img src="/home-page/scrollHorsie.png" alt="Scroll Horse">
</div>
{:else}

{/if}
</div>



<style>
    .scrollHorse{
        max-width: 100%;
        height: auto;
        background: url('/home-page/scrollHorsie.png'), #FCFCFC 50% / cover no-repeat;
        position: sticky;
        top: 500px;
        left:auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }

</style>

<script>
    import Heading from '$lib/components/Heading.svelte';
    export let mainText;
</script>

<div>
    <div style="padding: 20px" class="flex">
        <div class="panel-box">
            <div class="flip-card">
                <div class="card-side-inner">
                    <div class="card-side-front person-details">
                        <Heading text={mainText} size={1.5} textColor="#000" />
                    </div>
                    <div class="card-side-back person-details">
                        <div style="margin-top: auto; margin-bottom: auto;">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .person-details {
        line-height: 350px;
    }

    .flip-card {
        background-color: transparent;
        width: 350px;
        height: 350px;
        perspective: 1000px;
    }
</style>

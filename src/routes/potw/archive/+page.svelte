<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import { onMount, tick } from 'svelte';

    export let data;
    let mathContainers = [];

    onMount(async () => {
        await tick();

        for (let attempts = 0; attempts < 100; attempts++) {
            if (window.MathJax?.typesetPromise) {
                await new Promise(requestAnimationFrame);
                window.MathJax.typesetClear?.(mathContainers);
                await window.MathJax.typesetPromise(mathContainers);
                return;
            }

            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    });
</script>

<svelte:head>
	<title>Problem of the Week</title>
    <script>
        window.MathJax = {
            startup: {
                typeset: false
            },
            tex: {
                inlineMath: [['\\(', '\\)'], ['$', '$']]
            }
        };
    </script>
    <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</svelte:head>


<PageHeader title="Past Problems" description="Previous Problems of the Week and Solutions" button_url="/potw" button_text="See Current Problem" button_id="seePotw" target="_self"/>

{#if data.archive && data.archive.length > 0}
    {#each data.archive as potw, i}
    <Section>
        <div class="potw-layout" bind:this={mathContainers[i]}>
            <Heading text={potw.title} size={4} textColor="#3C6F8B" />

            <PanelBox width="min(920px, 92vw)" padding="2rem" borderRadius="18px" style="background: #f8fbfd;">
                <div class="problem-card">
                    <p class="problem-label">Problem</p>
                    <div class="latex-problem">
                        <p>
                            {@html potw.problem}
                        </p>
                    </div>
                </div>

                {#if potw.solution}
                <div class="solution-card">
                    <p class="solution-label">Answer: {potw.answer}</p>
                    <p>
                        {@html potw.solution}
                    </p>
                </div>
                {/if}
            </PanelBox>
        </div>
    </Section>
    {/each}
{:else}
    <Section>
        <div class="potw-layout">
            <Heading text="Past Problems" size={4} textColor="#3C6F8B" />
            <PanelBox width="min(920px, 92vw)" padding="2rem" borderRadius="18px" style="background: #f8fbfd;">
                <div class="problem-card">
                    <p class="problem-label">Problem</p>
                    <div class="latex-problem">
                        <p>No problems archived yet, check back soon for past problems and their solutions.</p>
                    </div>
                </div>
            </PanelBox>
        </div>
    </Section>
{/if}


<style>
    .potw-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1.25rem;
        padding: 3rem 1rem 4rem;
        background: #b9c6d2;
    }

    .problem-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: left;
    }

    .problem-label {
        margin: 0;
        color: #1f4c62;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-size: 0.95rem;
    }

    .latex-problem {
        background: #ffffff;
        border-radius: 12px;
        padding: 1rem 1.15rem;
        color: #20313b;
        line-height: 1.8;
        font-size: 1.05rem;
        box-shadow: inset 0 0 0 1px rgba(60, 111, 139, 0.15);
    }

    .latex-problem p {
        margin: 0;
    }

    .solution-card {
        margin-top: 1.5rem;
        text-align: left;
        background: #ffffff;
        border-radius: 12px;
        padding: 1rem 1.15rem;
        color: #20313b;
        line-height: 1.8;
        box-shadow: inset 0 0 0 1px rgba(60, 111, 139, 0.15);
    }

    .solution-label {
        margin-top: 0;
        font-weight: 700;
        color: #1f4c62;
    }
</style>

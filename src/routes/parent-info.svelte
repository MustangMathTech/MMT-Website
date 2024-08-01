<script>
	import PageHeader from "$lib/components/PageHeader.svelte";
	import Section from "$lib/components/Section.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import FlexBox from "$lib/components/FlexBox.svelte";
	import Image from "$lib/components/Image.svelte";
	import PanelBox from "$lib/components/PanelBox.svelte";
	import Link from "$lib/components/Link.svelte";
	import sponsorTiers from "$lib/jsons/sponsorTiers";

	let windowWidth;
	let windowHeight;
	let learnMoreIsVisible = true;
	let y;
	let scrollOpacity = 1;
	$: scrollOpacity = Math.max((windowHeight - 2 * y) / windowHeight, 0);
	$: learnMoreIsVisible = scrollOpacity > 0;

	function scrollToElem(e) {
		e.scrollIntoView({
			behavior: "smooth",
		});
	}
</script>

<svelte:window
	bind:scrollY={y}
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
/>

<svelte:head>
	<title>Partners and Sponsors</title>
</svelte:head>

<PageHeader
	title="Parent Info"
	description="Relevant MM Information for Parents"
	button_url="
https://tinyurl.com/MMSponsors2024"
	button_text="  !"
	button_id="sponsorMM"
/>

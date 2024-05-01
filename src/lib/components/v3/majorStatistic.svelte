<script>
	export let classProp = "";
	/**
	 * @type {any[]}
	 */
	export let sublogs = [];
	export let heading1 = "Pages";
	export let heading2 = "Visitors";
	export let interactive = false;
	export let hasImage = false;
	export let imageUrl = "https://mustangmath.com/logo.png";

	// Sample data
	// let sublogs = [
	//     { name: '/our-team', times: 2 },
	//     { name: '/contact-us', times: 3 }
	// ];
</script>

<div
	class="rounded-md bg-white flex flex-col h-full w-1/2 max-w-1/2 max-h-full shadow-xl drop-shadow-xl p-4 gap-y-2 {classProp}"
>
	<div class="flex h-1/7 w-full flex-row justify-between px-2">
		<p class="text-xl w-2/5 text-start pl-4 font-semibold">{heading1}</p>
		<div class="flex flex-row flex-grow h-full" />
		<p class="text-lg w-1/5 text-center font-light uppercase">{heading2}</p>
	</div>
	<div class="border-t border-gray-300 pt-1 w-full"></div>

	{#each sublogs as log (log.name)}
		<div
			class="self-center w-full bg-[#eaeaea]/80 rounded-lg h-fit px-2 py-2 flex flex-row justify-between"
		>
			{#if hasImage}
				<img src={imageUrl} alt="Site Logo" class="h-[32px] aspect-square" />
			{/if}
			{#if interactive}
				<a
					class="text-base w-2/5 text-start pl-4 text-black underline"
					href="/"
					target="_blank">{log.name}</a
				>
			{:else}
				<p class="text-base w-2/5 text-start pl-4">{log.name}</p>
			{/if}
			<div class="flex flex-row flex-grow" />
			<p class="text-base font-bold w-1/5 text-center">{log.times}</p>
		</div>
	{/each}
</div>

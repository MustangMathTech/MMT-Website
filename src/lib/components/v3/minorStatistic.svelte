<script>
	export let classProp = "";
	/**
	 * @type {any[]}
	 */
	export let sublogs = [];
	export let heading1 = "Pages";
	export let heading2 = "Visitors";

	// Sample data
	// let sublogs = [
	//     { name: '/our-team', times: 2 },
	//     { name: '/contact-us', times: 3 }
	// ];
</script>

<div
			class="rounded-md bg-white flex flex-col h-full w-1/3 max-w-1/3 max-h-full shadow-xl drop-shadow-xl p-4 gap-y-2"
		>
			<div class="flex h-1/7 w-full flex-row justify-between px-2">
				<p class="text-lg w-2/5 text-start pl-4 font-medium">Countries</p>
				<div class="flex flex-row flex-grow h-full" />
				<p class="text-base w-1/5 text-center font-light uppercase">Visitors</p>
			</div>
			<div class="border-t border-gray-300 pt-1 w-full"></div>

			<!-- TODO componentize this -->
			<div
				class="self-center w-full bg-[#eaeaea]/80 rounded-lg h-fit px-2 py-2 flex flex-row justify-between"
			>
				<p class="text-sm w-2/5 text-start pl-4">/our-team</p>
				<div class="flex flex-row flex-grow" />
				<p class="text-sm font-bold w-1/5 text-center">3</p>
			</div>

			<div
				class="self-center w-full bg-[#eaeaea]/80 rounded-lg h-fit px-2 py-2 flex flex-row justify-between"
			>
				<p class="text-sm w-2/5 text-start pl-4">/</p>
				<div class="flex flex-row flex-grow" />
				<p class="text-sm font-bold w-1/5 text-center">4</p>
			</div>
		</div>
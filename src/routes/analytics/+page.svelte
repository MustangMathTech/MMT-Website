<script>
	import "./overwrites.css";
    import MajorStatistic from "$lib/components/v3/majorStatistic.svelte";

	/**
	 * @typedef {Object} PageStat
	 * @property {string} name - The name of the page.
	 * @property {number} times - The number of times the page was visited.
	 */

	/**
	 * @typedef {Object} ReferrerStat
	 * @property {string} name - The name of the referrer.
	 * @property {number} times - The number of times the referrer was recorded.
	 */

	/**
	 * @typedef {Object.<string, number>} CountryStat
	 * An object representing country statistics where keys are country names and values are the number of occurrences.
	 */

	/**
	 * @typedef {Object.<string, number>} OSStat
	 * An object representing operating system statistics where keys are operating system names and values are the number of occurrences.
	 */

	/**
	 * @typedef {Object.<string, number>} BrowserStat
	 * An object representing browser statistics where keys are browser names and values are the number of occurrences.
	 */

	/**
	 * @typedef {Object} Data
	 * @property {PageStat[]} pages - An array of page statistics.
	 * @property {ReferrerStat[]} referrers - An array of referrer statistics.
	 * @property {CountryStat[]} countries - An array of country statistics.
	 * @property {OSStat[]} os - An array of operating system statistics.
	 * @property {BrowserStat[]} browsers - An array of browser statistics.
	 */

	/** @type {Data} */
	export let data;
</script>

<div
	class="w-full bg-[#eae3e3] h-screen min-h-screen overflow-y-scroll flex flex-col p-6 px-10 gap-y-8"
>
	<div class="flex flex-row h-2/5 w-full gap-x-10 justify-between">
        <MajorStatistic sublogs={data.pages}  />
		<MajorStatistic sublogs={data.referrers} heading1={'Referrers'} hasImage={true} interactive={true}  />
	</div>

	<div class="flex flex-row h-2/5 w-full gap-x-10 justify-between">
		

		<div
			class="rounded-md bg-white flex flex-col h-full w-1/3 max-w-1/3 max-h-full shadow-xl drop-shadow-xl p-4 gap-y-2"
		>
			<div class="flex h-1/7 w-full flex-row justify-between px-2">
				<p class="text-lg w-1/2 text-start pl-4 font-medium">
					Operating Systems
				</p>
				<div class="flex flex-row flex-grow h-full" />
				<p class="text-base w-1/5 text-center font-light uppercase">Visitors</p>
			</div>
			<div class="border-t border-gray-300 pt-1 w-full"></div>

			<!-- TODO componentize this -->
			<div
				class="self-center w-full bg-[#eaeaea]/80 rounded-lg h-fit px-2 py-2 flex flex-row justify-between"
			>
				<p class="w-1/2 text-start pl-4 text-sm">/our-team</p>
				<div class="flex flex-row flex-grow" />
				<p class="font-bold w-1/5 text-center text-sm">3</p>
			</div>

			<div
				class="self-center w-full bg-[#eaeaea]/80 rounded-lg h-fit px-2 py-2 flex flex-row justify-between"
			>
				<p class="text-sm w-1/2 text-start pl-4">/</p>
				<div class="flex flex-row flex-grow" />
				<p class="text-sm font-bold w-1/5 text-center">4</p>
			</div>
		</div>

		<div
			class="rounded-md bg-white flex flex-col h-full w-1/3 max-w-1/3 max-h-full shadow-xl drop-shadow-xl p-4 gap-y-2"
		>
			<div class="flex h-1/7 w-full flex-row justify-between px-2">
				<p class="text-lg w-2/5 text-start pl-4 font-medium">Browsers</p>
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
	</div>
</div>

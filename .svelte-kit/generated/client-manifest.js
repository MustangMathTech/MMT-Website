export { matchers } from './client-matchers.js';

export const components = [

	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/3MTOpeningCeremony.svelte"),
	() => import("../../src/routes/archive/AlgebraClasses.svelte"),
	() => import("../../src/routes/archive/join.svelte"),
	() => import("../../src/routes/classes/index.svelte"),
	() => import("../../src/routes/classes/instructors.svelte"),
	() => import("../../src/routes/classes/seminars.svelte"),
	() => import("../../src/routes/classes/tutoring.svelte"),
	() => import("../../src/routes/competitions/index.svelte"),
	() => import("../../src/routes/competitions/mmm-2024.svelte"),
	() => import("../../src/routes/competitions/past/3mt-2022.svelte"),
	() => import("../../src/routes/competitions/past/3mt-2023.svelte"),
	() => import("../../src/routes/competitions/past/index.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2022.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2023/mmt-2023-CA.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2023/mmt-2023-WA.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2023/mmt-2023-online.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2023.svelte"),
	() => import("../../src/routes/competitions/past/mmt-2024.svelte"),
	() => import("../../src/routes/donate.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/join.svelte"),
	() => import("../../src/routes/our-team.svelte"),
  () => import("..\\..\\src\\routes\\parent-info.svelte"),
	() => import("../../src/routes/past-tests.svelte"),
	() => import("../../src/routes/redirect.svelte"),
	() => import("../../src/routes/sponsors.svelte")

];

export const dictionary = {
	"": [[0, 21], [1]],
	"3MTOpeningCeremony": [[0, 2], [1]],
	"classes": [[0, 5], [1]],

	"competitions": [[0, 8], [1]],
	"donate": [[0, 18], [1]],
	"join": [[0, 20], [1]],
	"our-team": [[0, 21], [1]],
	"parent-info": [[0, 22], [1]],
	"past-tests": [[0, 23], [1]],
	"redirect": [[0, 24], [1]],
	"sponsors": [[0, 25], [1]],

	"archive/AlgebraClasses": [[0, 3], [1]],
	"archive/join": [[0, 4], [1]],
	"classes/instructors": [[0, 6], [1]],
	"classes/seminars": [[0, 7], [1]],
	"classes/tutoring": [[0, 8], [1]],
	"competitions/mmm-2024": [[0, 10], [1]],
	"competitions/past": [[0, 13], [1]],
	"competitions/past/3mt-2022": [[0, 11], [1]],
	"competitions/past/3mt-2023": [[0, 12], [1]],
	"competitions/past/mmt-2022": [[0, 14], [1]],
	"competitions/past/mmt-2023": [[0, 18], [1]],
	"competitions/past/mmt-2024": [[0, 19], [1]],
	"competitions/past/mmt-2023/mmt-2023-CA": [[0, 15], [1]],
	"competitions/past/mmt-2023/mmt-2023-WA": [[0, 16], [1]],
	"competitions/past/mmt-2023/mmt-2023-online": [[0, 17], [1]]
};
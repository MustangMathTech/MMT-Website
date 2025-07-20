<script>
	import PageHeader from "$lib/components/PageHeader.svelte";
	import Section from "$lib/components/Section.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Timeline from "$lib/components/Timeline.svelte";

	let windowWidth;
	let windowHeight;
	let y;
	let scrollOpacity = 1;
	$: scrollOpacity = Math.max((windowHeight - 2 * y) / windowHeight, 0);

	const tournaments = [
		{
			name: "MMT (International)",
			date: "Summer 2025",
			description: "International version of MMT.",
			url: "https://www.simcconline.org/mmt/", 
		},
		{
			name: "Mustang Math Mania (M^3)",
			date: "Fall 2025",
			description:
				"Includes a week-long proof-based contest prior to contest day followed by a series of individual and team rounds including a standard individual round, a time based, intensive round called Mustang Meltdown and a strategic betting round, Betting Bonanza, where contestants wager points to different problems sets to maximize their score.",
		}
		,
		{
			name: "MMT (Mustang Math Tournament)",
			date: "Spring 2026",
			description:
				"Our flagship tournament. Teamwork and cooperation-based: no individual round. Hidden puzzle throughout the tournament to uncover a hidden message.",
			url: "https://www.mustangmath.com/competitions/mmt-2025",
			},
	];

	const links = [
		{
			title: "Mustang Math Seminars",
			description:
				"Through our free online seminars, we aim to help students develop strong mathematical reasoning skills while exploring the world of math beyond the middle and high school curriculum. We help students develop strong mathematical reasoning skills, which are important for math contests, colleges, and life! ",
			url: "https://mustangmath.com/classes/seminars",
		},
		{
			title: "Mustang Math Classes",
			description:
				"Mustang Math Classes prepare students for success in math competitions through small class sizes, detailed feedback, and focus on developing long-term problem solving skills. In our classes, students will learn greatly from solving challenging problems suited to their current skill level. ",
			url: "https://mustangmath.com/classes",
		},
		{
			title: "Mustang Math Tutoring",
			description:
				"Our tutoring program offers personalized instruction in math, ranging from basic arithmetic to advanced calculus. We provide one-on-one tutoring as well as group sessions. Whether your child is struggling to keep up in class or wants to excel beyond the standard curriculum, our expert tutors are here to help.	Join us to unlock your child's full mathematical potential.",
			url: "https://mustangmath.com/classes/tutoring",
		},
	];
</script>

<PageHeader
	title="Parent Info"
	description="Relevant MM Information for Parents"
	button_url="https://tinyurl.com/MMSponsors2024"
	button_text="Sponsor MM!"
	button_id="sponsorMM"
/>

<Section>
	<Heading level="2" text="Relevant Information/Upcoming Events" textColor="#1B9AAA"/>
	<Timeline events={tournaments} {links} />
</Section>

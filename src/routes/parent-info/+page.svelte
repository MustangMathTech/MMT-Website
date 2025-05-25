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
			name: "MMT (Mustang Math Tournament)",
			date: "Spring 2025",
			description:
				"Our flagship tournament. Teamwork and cooperation-based: no individual round. Hidden puzzle throughout the tournament to uncover a hidden message.",
		},
		{
			name: "MMT (International)",
			date: "Summer 2025",
			description: "International version of MMT.",
		},
		{
			name: "Mustang Math Mania (M^3)",
			date: "Fall 2025",
			description:
				"Includes a week-long proof-based contest prior to contest day followed by a series of individual and team rounds including a standard individual round, a time based, intensive round called Mustang Meltdown and a strategic betting round, Betting Bonanza, where contestants wager points to different problems sets to maximize their score..",
		},
	];

	const links = [
		{
			title: "Mustang Math Tutoring",
			description:
				"Our tutoring program offers personalized instruction in math, ranging from basic arithmetic to advanced calculus. We provide one-on-one tutoring as well as group sessions. Whether your child is struggling to keep up in class or wants to excel beyond the standard curriculum, our expert tutors are here to help.	Join us to unlock your child's full mathematical potential.",
			url: "https://mustangmath.com/classes/tutoring",
		},
		{
			title: "Mustang Math Instructors",
			description:
				"Our instructors are passionate about math and dedicated to teaching. With years of experience in both competitive math and education, they bring a wealth of knowledge to every lesson. Many of our instructors are former contestants of national and international math competitions. Learn more about our incredible team and their journey.",
			url: "https://mustangmath.com/classes/instructors",
		},
		{
			title: "Past Mustang Math Tests",
			description:
				"Looking to practice for an upcoming contest? Our archive of past Mustang Math tests is the perfect place to start. Each test comes with solutions and detailed explanations. Practicing these tests can help students familiarize themselves with the type of questions they’ll encounter and improve their problem-solving skills.",
			url: "https://mustangmath.com/past-tests",
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
	<Heading level="2" text="Relevant Information/Upcoming Events" />
	<Timeline events={tournaments} {links} />
</Section>

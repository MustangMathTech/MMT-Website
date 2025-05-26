<script>
	import Heading from "$lib/components/Heading.svelte";
	import Dropdown from "$lib/components/Dropdown.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import PanelBox from "$lib/components/PanelBox.svelte";
	import FlipCard from "$lib/components/FlipCard.svelte";
	let windowWidth;
</script>

<svelte:head>
	<title>Join Mustang Math</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader
	
	title="Join Mustang Math"
	description="Spread our Mission!"
	button_url="https://link.mustangmath.com/RecruitmentInfo"
	button_text="Join Our Teams"
	id="joinTheMustangMathTeam"
	button2_url="https://docs.google.com/forms/d/e/1FAIpQLSdO-bYRgXo9rh3z_HTZs4yQ1ebf81XyRZiPPqiYiLFZMFDAdQ/viewform"
	button2_text="Start MMT in your Area"
/>
<br /> <br />


<Heading text="What is MMT?" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
	<PanelBox>
		<p style="font-size: 1.5em; text-align: center;">
			Mustang Math is a <b style="color: #1B9AAA;">nonprofit organization</b> of
			high school and college volunteers that are dedicated towards providing
			middle schoolers access to challenging, interesting, fun, and
			collaborative math competitions and resources! We are the organizers of
			the annual <b style="color: #1B9AAA;">Mustang Math Tournament</b>
			as well as our individual MMM, run low-cost and high-quality
			<b style="color: #1B9AAA;">mathematics teaching</b>
			and are also working on many new and exciting projects such as building an online test-taking platform, 
			creating AMC and MATHCOUNTS mocks, and expanding
			our social media reach! We reached
			<b style="color: #1B9AAA;">almost 900 U.S. competitors</b> across our 9 locations of MMT 2025
			contests, and we're expecting many more in our international tournament this
			upcoming August. We are excited to expand our team to continue our mission
			of spreading a love for mathematics amongst students.
		</p>
		<p style="font-size: 1.5em; text-align: center;">
			We're currently looking for motivated high school students to <b style="color: #1B9AAA;">join our team!</b>
		</p>
		<div class="flex">
			<a class="join_now" href="https://link.mustangmath.com/RecruitmentInfo" target="_blank"
				>Join our teams</a
			>
		</div>
	</PanelBox>
</div>
<br />

<Heading
	text="Why should you join Mustang Math?"
	size={2.5}
	textColor="#1B9AAA"
/>
<div style="margin-left: 10vw; margin-right: 10vw;">
	<PanelBox>
		<p style="font-size: 1.5em; text-align: center;">
			You should join Mustang Math if you are in high school or college and want to share the love you have for <b style="color: #1B9AAA;"
				>competition math</b
			>
			and the
			<b style="color: #1B9AAA;">community</b> that it provides to other
			students. Additionally, as a non-profit organization on the rise, there
			are numerous opportunities for volunteers to
			<b style="color: #1B9AAA;">share ideas</b>
			and <b style="color: #1B9AAA;">suggest projects</b> that they are
			interested in. Overall, working in the Mustang Math team is both a fun and
			fulfilling experience where volunteers are able to pursue their passion
			all while learning <b style="color: #1B9AAA;">real-life skills</b> such as
			teamwork, time management, and how to see a project through to completion.
		</p>
		<p style="font-size: 1.5em; text-align: center;">
			Our <b style="color: #1B9AAA;">wide plethora of teams and projects</b> means you can find things to work on that are interesting and exciting to you. There are both math-inclined teams (Curriculum Development, Problem Writing), and non-math related teams (Tech, Design, Tournament Development, Business and Engagement). We welcome <b style="color: #1B9AAA;">all interested high schoolers to join</b>, no matter your experience with math!

		</p>
		
	</PanelBox>
</div>
<br />

<Heading text="In-Person Locations" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
	<PanelBox>
		<p style="font-size: 1.5em; text-align: center;">
			For 2025-2026, we are looking to expand our in-person tournaments to include:
		</p>
		<ul>
			<li>Washington (Seattle)</li>
			<li>Northern California (Bay)</li>
			<li>Southern California (LA/San Diego)</li>
			<li>Illinois (Chicago)</li>
			<li>Massachusetts (Boston)</li>
			<li>Texas (Austin/Houston/Dallas)</li>
			<li>Virginia (Alexandria/DC)</li>
			<li>Georgia (Atlanta)</li>
			<li>Nevada (Las Vegas)</li>
			<li>North Carolina, (Chapel Hill/Raleigh/Charlotte)</li>
			<li>Minnesota (Minneapolis)</li>
			<li>Colorado (Denver)</li>
		</ul>
		<p style="font-size: 1.5em; text-align: center;">
			These locations would be responsible for running an in-person location of MMT 2026 to the students
			from their state and nearby areas, and will also receive support from
			Mustang Math to run other similar events. If you're from these areas and
			want to help give a wonderful contest experience to your local middle
			school students, definitely consider joining!  If you are not from these areas, 
			we are also looking for people to <b style="color: #1B9AAA;">start a Mustang Math Tournament</b> in their area! 
			By joining our team, we will give you the guidance and resources that you need to run your own MMT, 
			including building a team of volunteers, finding a location, marketing, and much more. To apply and see more details, click below!
		</p>
		<div class="flex">
			<a class="join_now" href="https://tinyurl.com/MMRegionDirectorRecruitment" target="_blank"
			>Start your own MMT Contest</a
			>
		</div>
		<p style="font-size: 1.5em; text-align: center;">
			If you aren't from these regions, remember that our teams are open to anyone interested!
		</p>
	</PanelBox>
</div>
<br />

<Heading text="Our Teams" size={2.5} textColor="#1B9AAA" />

<div class="teams">
	<FlipCard mainText="Problem Writing" id="showDropdown" iconName="fa-calculator problem-writing">
		<p>
			The <b style="color: #1B9AAA;">Problem Writing</b> team is primarily
			responsible for the <b style="color: #1B9AAA;">creation of problems</b>
			used by Mustang Math, and the
			<b style="color: #1B9AAA;">formation of tests</b> used for our annual tournament(s).
			Besides the tournament, you could write problems for our online practice platform,
			our classes and tutoring materials, and other Mustang Math projects! We welcome
			problem writers with a variety of experience.
		</p>
	</FlipCard>
	<FlipCard mainText="Tech" id="showDropdown" iconName="fa-computer technology">
		<p>
			The <b style="color: #1B9AAA;">Tech</b> team is in charge of ensuring that
			all the various <b style="color: #1B9AAA;">technological-related needs</b>
			of Mustang Math as an organization are being met and maintained, as well as
			<b style="color: #1B9AAA;">implementing new projects</b> wherever necessary.
			Currently, the Tech team is working on tasks such as building a Mustang Math
			YouTube, creating a competition management platform, envisioning an online
			training platform, and other exciting projects!
		</p>
	</FlipCard>
	<FlipCard mainText="Design" id="showDropdown" iconName="fa-pen-fancy design">
		<p>
			The <b style="color: #1B9AAA;">Design</b> team ensures that Mustang Math
			maintains a <b style="color: #1B9AAA;">consistent image</b> and
			<b style="color: #1B9AAA;">aesthetic</b> throughout the year. Specific jobs
			that may arise include: Building and designing our merch, maintaining and rebranding
			the organization as necessary, working with other teams to ensure that materials
			are on brand, and expanding our reach through social media.
		</p>
	</FlipCard>
	<FlipCard mainText="Tournament Development" id="showDropdown" iconName="fa-pen-ruler tournament-development">
		<p>
			The <b style="color: #1B9AAA;">Tournament Development</b> team is
			responsible for <b style="color: #1B9AAA;">organization-level</b>
			communication and all communications relating to the tournament. In general,
			this will consist of <b style="color: #1B9AAA;">marketing</b> and
			<b style="color: #1B9AAA;">advertising</b>, working with
			<b style="color: #1B9AAA;">sponsors</b>,
			<b style="color: #1B9AAA;">communicating</b> with registrants of Mustang Math
			Tournament, and making sure that all partners are kept up-to-date with necessary
			information. Additionally, the Tournament Development team plans and manages
			all day-of operations for Mustang Math Tournament’s in-person competition(s).
		</p>
	</FlipCard>
	<FlipCard mainText="Curriculum Development" id="showDropdown" iconName="fa-chalkboard-user curriculum-development">
		<p>
			The <b style="color: #1B9AAA;">Curriculum Development</b> team is in
			charge of <b style="color: #1B9AAA;">developing content</b> for all
			Mustang Math classes as well as for YouTube videos if needed. This may
			consist of planning lecture material, finding example problems, and
			<b style="color: #1B9AAA;">teaching students</b>. This is a new team this
			year, meaning that there is a large potential for innovation, adaptation,
			and new ideas.
		</p>
	</FlipCard>
	<FlipCard mainText="Community Engagement" id="showDropdown" iconName="fa-people-group community-engagement">
		<p>
			The <b style="color: #1B9AAA;">Community Engagement</b> team is in charge
			of building and engaging the Mustang Math student community. Some of the
			jobs include managing <b style="color: #1B9AAA;">social media</b> and
			<b style="color: #1B9AAA;">online presence</b>, such as FaceBook,
			LinkedIn, Instagram, and AoPS. Other responsibilities can include
			<b style="color: #1B9AAA;">planning events</b>, activities, maintaining
			the discord server, and managing the youtube channel.
		</p>
	</FlipCard>
</div> 

<br />

<div class="flex">
	<a class="join_now" href="https://link.mustangmath.com/RecruitmentInfo" target="_blank"
		>Join Now</a
	>
</div>

<style>
	.join_now {
		text-align: center;
		color: white;
		background-color: #1b9aaa;
		border-radius: 200px;
		text-decoration: none;
		padding: 20px 50px;
		width: fit-content;
		font-size: 40px;
		margin: 20px;
		margin-bottom: 50px;
		cursor: pointer;
		transition: all 0.2s ease-out;
	}

	.join_now:hover {
		background-color: #36bcce;
	}

    .teams {
        padding: 20px; 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>

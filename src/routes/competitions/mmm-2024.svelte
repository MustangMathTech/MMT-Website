<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Image from '$lib/components/Image.svelte';
    import PanelBoxAnimated from '$lib/components/PanelBoxAnimated.svelte';
    import Testimonial from '$lib/components/Testimonial.svelte';
    import FlipCard from "$lib/components/FlipCard.svelte";
    
    let windowWidth;
    
    const scheduleData = [
        { "Day": "09/21-09/28", "Start Time (PT)": "All Day", "Event": "Perilous Proofs" },
        [ "09/28", "9:00 AM-9:30 AM", "Opening Ceremony" ],
        [ "09/28", "9:30 AM-10:45 AM", "Solo Stampede" ],
        [ "09/28", "10:45 AM-12:00 PM", "Lunch" ],
        [ "09/28", "12:00 PM-1:00 PM", "Betting Bonanza" ],
        [ "09/28", "1:00 PM-2:15 PM", "Meltdown Madness" ],
        [ "09/28", "2:15 PM-4:30 PM", "Activities" ],
        [ "09/28", "4:30 PM", "Awards" ]

    ];

    const topicsCovered = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation / Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>",
        "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsSmall1 = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>" }
    ];
    const topicsSmall2 = [
        { "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsAlgebra = [
        {"Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>"}
    ];
    const topicsCombo = [
        {"Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>"}
    ];
    const topicsGeo = [
        {"Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>"}
    ];
    const topicsNT = [
        {"Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>"}
    ];
</script>
<svelte:head>
    <title>M³</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader title="Mustang Math Mania (M³)" description="September 28th, 2024, 9:00 AM - 5:00 PM PST"  button_url="https://contestdojo.com" button_text="Register for M³!" button_id="registerTournament" button2_url="https://classroom.google.com/c/NzA1MzI4MDMwMjk3?cjc=66q7ckx" button2_text="Free Prep Classes!" button2_id="registerClasses" />

<br /><br />

<br /><br />

<Heading text="Registration Instructions and Information" size={2.5} textColor="#1B9AAA" />


<PanelBoxAnimated id="showDropdown" style="margin-right:5vw; margin-left:5vw;">
    <div style="padding: 10px;padding-right:5vw; font-size:1.5rem;">
        <a href="https://docs.google.com/document/d/1TYj8YWiXXkg8WBNouppjlsJNRG1Cs21LW4TR3GKGL1I/edit" target="_blank"><strong>CLICK HERE FOR REGISTRATION INSTRUCTIONS</strong></a>
        <br/><br/>
        <strong>DATE: </strong> September 28th, 2024 <br/><br/>
        <strong>TEAM SIZE: </strong> 3-4*<br/><br/>
        <strong>LOCATION:</strong> Online <br /> <br />
        <strong>EARLY COST: </strong> $8 per participant (Register before August 30th, 2024) <br /> <br />
        <strong>REGULAR COST: </strong> $10 per participant (Register before September 16th, 2024) <br /> <br />
        <strong>LATE COST: </strong> $15 per participant (Register before September 20th, 2024) <br /> <br />

        
        *: Incomplete teams of 1-2 may be merged with other teams to make a full team of 3-4

    </div>
</PanelBoxAnimated> <br /><br>

<Heading text="What is M³" size={2.5} textColor="#1B9AAA" />

<PanelBoxAnimated id="showDropdown" style="margin-right:5vw; margin-left:5vw;">
    <div style="padding: 10px;padding-right:5vw; font-size:1.5rem;">
        Mustang Math Mania is a middle school math competition run for students around the nation. It is put together by Mustang Math, a 501(c)(3) nonprofit organization made up of high school and college students!
        <br/>
        <br/>

        The tournament is centered around teamwork and collaboration, incentivizing students to work with their teams not only to navigate the challenging but interesting problems of the tournament, but also to develop strategies to master the unique and fun game-like rounds. Kicking off the week prior to the tournament with a proof based round tailored towards middle school students, and continuing with innovative and interesting rounds such as a “floor is lava” and a risky gambling round, our tournaments are filled with fun and excitement for students at all levels.
        <br/>        <br/>

        Don't believe us? Check out some comments from past participants below!

    </div>
</PanelBoxAnimated> <br /> <br>

<Heading text="Free Perilous Proof Prep Program" size={2.5} textColor="#1B9AAA" />

<PanelBoxAnimated id="showDropdown" style="margin-right:5vw; margin-left:5vw;">
    <div style="padding: 10px;padding-right:5vw; font-size:1.5rem;">
        In order to help familiarize students to the concept of proofs for the <b>Perilous Proofs</b> round, Mustang Math is offering two <b>free</b> online introductory proof classes on <b>9/14</b> and <b>9/15</b>.
        <br><br>
        <b>Class 1</b> will cover logic and proof techniques like contradiction. It will take place on Saturday, September 14, 1:30 PM PT. <br><b>Class 2</b> will be slightly more challenging and focus on induction. This class will be on Sunday, September 15, 11:00 AM PT. 
        <br><br>
        <div class="flex">
            <a class="button" href="https://classroom.google.com/c/NzA1MzI4MDMwMjk3?cjc=66q7ckx" target="_blank"
                >Sign Up</a
            >
        </div>
    </div>
</PanelBoxAnimated> <br /> <br>




<br />

<Heading text="Rounds" size={2.5} textColor="#1B9AAA" />
<div class="rounds">
	<FlipCard mainText="Perilous Proofs" iconName="fa-calculator" borderColor="#82BD88">
		<p>
			<b style="color: #1B9AAA;">Perilous Proofs</b> is a team proof-based round that 
            will consist of a variety of mathematical reasoning and proof based questions designed to challenge the participants.
            The round will take place the week <b style="color: #1B9AAA;">before</b> M³ to ensure students have
            ample time to think through the problems.
		</p>
	</FlipCard>
	<FlipCard mainText="Solo Stampede" iconName="fa-computer" borderColor="#90CDA9">
		<p>
			<b style="color: #1B9AAA;">Solo Stampede</b> is an individual round where students will have 60 minutes
            to complete a 25 question test. This round is akin to a typical individual round in a contest like AMC8 or Sprint in MATHCOUNTS.
		</p>
	</FlipCard>
	<FlipCard mainText="Betting Bonanza" iconName="fa-pen-fancy" borderColor="#82B9A9">
		<p>
			<b style="color: #1B9AAA;">Betting Bonanza</b> is a team round where teams need to strategically bid points on various sets of problems of increasing difficulty.
            Teams need to balance their greed with their confidence to succeed in this round.
		</p>
	</FlipCard>
	<FlipCard mainText="Meltdown Madness" iconName="fa-pen-ruler" borderColor="#67909E">
		<p>
			<b style="color: #1B9AAA;">Meltdown Madness</b> is a fast-paced team round where teams must work together to solve problems before they 'melt' into the rising lava. 
            Any problems solved after they have 'melted' will no longer be worth any points.
		</p>
	</FlipCard>
</div> 

<Heading text="Schedule" size={2.5} textColor="#1B9AAA" />

<div class="schedule-wrapper">
    <FlexBox>
        <PanelBoxAnimated>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20} tableStyle="margin-left: auto; margin-right: auto"/>
            <p style="margin-top: 2px; margin-bottom: 0px;">*Schedule subject to change. Note that there is built-in buffer time to explain instructions and assist with technical difficulties.*</p>
        </PanelBoxAnimated>
    </FlexBox>
</div>


<!-- <Heading text="Awards" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><b>$50</b>, <b>$25</b>, and <b>$25</b> gift cards will be given to the 1st, 2nd, and 3rd place finishers within each division (not HS). 1st and 2nd place finishers will additionally receive a math book from AwesomeMath. All students will receive certificates of participation and high-scoring students will receive certificates of achievement.</p>
        <p style="font-size: 1.5em; text-align: center;">A wide variety of other prizes are available for top scoring individuals, winners of activities, and a raffle, including AoPS Gift Certificates, Brilliant Premium subscriptions, vouchers for <a target = "_blank" href = "https://mustangmath.com/classes">Mustang Math Classes</a>, <a target="_blank" href="https://www.wolfram.com/notebooks/">Wolfram Notebooks</a>, AwesomeMath books and more!</p>
    </PanelBox>
</div> <br /> -->

<br /><br />

<Heading text="Participant Eligibility" size={2.5} textColor="#1B9AAA" />

<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1.5em;">
    <PanelBoxAnimated style="padding-left:5vw; padding-right:5vw;">
        <p>3MT is a tournament meant for <b>middle school students and below</b> from the <b>the United States and Canada</b>. Students not from the US or Canada should participate in the international version of the contest happening next January-February.</p>
        <p>The divisions in 3MT are as follows:</p>
        <ul style="opacity: 0.8;">
            <li><strong>Grades 6 and below: Foal Division</strong></li>
            <li><strong>Grades 7: Colt Division</strong></li>
            <li><strong>Grades 8: Stallion Division</strong></li>
        </ul> 
        <p>Students may choose to compete in a higher division than they were originally assigned. Student <u><strong>may not</strong></u> compete in a lower division than they were originally assigned.</p>
        <p>High school students are welcome to participate, but they will participate in a separate High School division and will not receive rankings or awards.</p>
    </PanelBoxAnimated>
</div> <br />

<!-- <Heading text="Activities" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1.5em;">
    <PanelBox style="padding-left:5vw; padding-right:5vw;">
        <p>
            <strong>Desmos Art:</strong> Get your creative (math) juices flowing with a Desmos art session! Draw something ingenious on the desmos.com graphing calculator, and see where your imagination takes you.<br />
        </p>
        <p>
            <strong>Very Legit Round:</strong> This is a completely normal, typical, 100% standard, math tournament round. There is nothing suspicious about the problems at all...
        </p>
    </PanelBox>
</div> <br /> -->

<br /><br />

<!-- <Heading text="Problem of the Day" size={2.5} textColor="#1B9AAA" />
<br /><br />

<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1.5em;">
    <PanelBoxAnimated style="padding-left:5vw; padding-right:5vw;">
        <p>POTD is a small mini-contest that will be held in the week leading up to 3MT. We will post a problem every day, starting on 11/13, and participants will have the chance to answer these problems through ContestDojo. Points are earned for each correct answer, and the person with the most points at the end will be the winner!</p>
    </PanelBoxAnimated>
</div> <br /> -->


<br /><br />

<Heading text="Rules" size={2.5} textColor="#1B9AAA" />
<br />

<Heading text="General Rules" size={2} textColor="#1B9AAA" />
<br />



<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">
    <PanelBoxAnimated>
    <ol>
        <li>All contestants will be required to have their cameras and mics ON during the test. 
        <li>No cheating - This contest has a zero-tolerance cheating policy. Any evidence of cheating may lead to immediate disqualification, or any other punishment deemed appropriate by competition staff.</li>
        <li>No calculators, rulers, compasses, protractors, or other aids are permitted.</li>
        <li>You may not use the Internet as a resource at any point during a test.</li>
            <ol type="a">
                <li>In order to help enforce this, we may require individuals to provide a solution for a problem during the competition - so keep track of your work!</li>
            </ol>
        <li>Individuals may not collaborate with anyone. This includes other participants, parents, coaches, siblings, and friends.</li>
        <li>Individuals will be split into three divisions based on their grade level. As mentioned above, students may upcompete.</li>
    </ol>
    </PanelBoxAnimated>
</div>
<br />
<!--
<Dropdown mainText="Rounds" id="showDropdown">

    <Heading text="Rounds" size={2} textColor="#1B9AAA"/>
    <br />
    <div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">
            <p style="color:black;"> Perilous Proofs:</p>
            <ol>
                <li>The week before competition day, teams will compete in a proof-writing competition. This round will consist of various problems in which students must either compute an answer, explain their reasoning, or write mathematically sound proofs to demonstrate why some property holds true.
                </li>
            </ol>
            <p style="color:black;"> Solo Stampede:</p>
            <ol>
                <li>Students will compete individually to answer a X question test in X minutes. These individual scores will be factored into the team score at the end.
                </li>
            </ol>
            <p style="color:black;"> Meltdown Madness: </p>
            <ol>
                <li>Teams will compete in a 25 question test over 25 minutes. After the first minute, problem #1 will sink and become unsolvable. Every minute, the next problem will sink until all 25 problems become locked (new answers can not be submitted). Students will only earn points on unlocked problems solved correctly.
                </li>
            </ol>
            <p style="color:black;"> Betting Bonanza:</p>
            <ol>
                <li>Teams start with 100 points and 5 problem sets, each with a multiplier, (1.5, 2, 2.5, 3, and 3.5). Teams can then bet/allocate their points to sets before seeing problems, keeping any unused points. Over the next 45 minutes, teams work to solve the 25 problems. Each full set correctly solved returns the bet points multiplied, no points otherwise. Teams also earn 2 bonus points per correct problem, with a maximum of 50 bonus points.
                </li>
            </ol>
    </div>
    </Dropdown>
-->

<Dropdown mainText="Scoring & Tiebreakers" id="showDropdown">

<Heading text="Scoring & Tiebreakers" size={2} textColor="#1B9AAA"/>
<br />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">
        <p style="color:black;">Your score on the M³ individual Round is simply the number of questions you get right - each question is worth 1 point.</p>
        <p style="color:black;">If two or more students get the same number of questions right, ties will be broken as follows:</p>
        <ol>
            <li>Difficulty of problems solved. This will be determined by whichever student has the lowest <b>tiebreaker index</b>. <br>
            The <b>tiebreaker index</b> for a student is calculated by multiplying the total number of correct solves per problem for each problem the student got correct.</li><br>
            <li>Completion time. Should two students have the same tiebreaker index, ties will be broken by completion time. In particular, whichever student enters their final correct answer earliest will win this tiebreaker.</li>
        </ol>
        <p>Team scoring is the same as MMT - your score in each round will be normalized against the sccores of other teams in your divisions, and added up. Should there remain a tie, ties will be broken by the sum of the top 3 individual scores on your team.</p>
</div>
</Dropdown>

<Dropdown mainText="Answer Formatting Rules" id="showDropdown">
    <br />
<Heading text="Answer Formatting Rules" size={2} textColor="#1B9AAA"/>
<br />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1.5em;">
        <ol>
            <li>Carry out any reasonable calculations. For instance, you should evaluate any expressions which will take negligible time to evaluate (such as 1/2+1/3). You don't have to carry out unreasonable calculations, including large powers (e.g. 7<sup>8</sup>), large factorials, large products, and trigonometric functions which cannot be expressed in terms of radicals.</li>
            <li>Write rational numbers in lowest terms. Decimals are also acceptable, provided they are exact.</li>
            <li>Move all square factors outside radicals. For example, write 3√7 instead of √63.</li>
            <li>Denominators need to be rationalized. For example, write 1/√2 as √2/2 instead.</li>
            <li>Do not express an answer using a repeated sum or product.</li>
            <li>Here are some examples of simplified answers, and examples of unsimplified answers with simplified equivalents:
                <div style="margin-top: 5px; width:40vw"><Image url="../3MT-2023/Acceptable_Answers.png" alt="Acceptable answer examples" /></div>
            </li>
        </ol>
</div>
</Dropdown>

<Dropdown mainText="Potential Topics Covered" id="showDropdown">
<br />
<Heading text="Potential Topics Covered" size={2} textColor="#1B9AAA"/>
<br />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">
        <p style="text-align:center;font-size:1.3rem;" id="disclaimer">Disclaimer: While most problems should fall within the scope of these topics, there may be a few that are not.</p>
        {#if windowWidth > 1500}
        <Table data={topicsCovered} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/1200}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/1500}em;" />
        {:else if windowWidth > 800}
        <Table data={topicsSmall1} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/800}em;" />
        <Table data={topicsSmall2} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/800}em;" />
        {:else}
        <Table data={topicsAlgebra} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/500}em;" />
        <Table data={topicsCombo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/500}em;" />
        <Table data={topicsGeo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/500}em;" />
        <Table data={topicsNT} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" h padding-right:5vw;eaderStyle="font-size: {windowWidth/500}em;" />
        {/if}
</div>
</Dropdown>

<!-- <Dropdown mainText="Problem of the Day" id="showDropdown">
<br />
<Heading text="Problem of the Day" size={2} textColor="#1B9AAA"/>
<br />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">    
    
        <ol>
            <li>The Daily POTD will be made available on ContestDojo at around 3 PM PT daily from 11/13 to 11/17 (5 total). POTDs may be solved and answers updated in ContestDojo for up to 24 hours from the release of the daily problem.</li>
            <li>Solutions to the previous day's POTD will be posted the day after in #potd [link to channel]</li>
            <li>Anyone who has registered for 3MT is eligible to participate in this contest. You must be fully set up on ContestDojo and Discord to properly participate.</li>
            <li>Answers to the POTD will be submitted via ContestDojo. Log into your student portal in order to do so (See detailed info below)</li>
            <li>Do NOT discuss the current POTD with anyone, including but not limited to the Mustang Math Tournament server, with your teammates, and any other forms of social media or in-person communication. POTD is an individual event. Violators of this rule will be disqualified from the POTD competition.</li>
            <li>No tools besides a writing utensil and pencil are permitted for POTD's unless otherwise specified! This includes, but is not limited to, calculators, rulers, compasses, protractors, and the internet.</li>
            <li>Each problem will be worth 10 points. Some problems will split these points across multiple parts that build upon each other.</li>
            <li>The winner of POTD will win an AwesomeMath Book. Additionally, all students that submit at least one POTD correctly will be entered into a raffle for a Wolfram|Alpha Notebook Edition.</li>
            <li>Any ties will be broken by total time taken for the problems</li>
        </ol>

</div>
</Dropdown> -->

<Dropdown mainText="FAQ" id="showDropdown">
<br />
<Heading text="FAQ" size={2} textColor="#1B9AAA"/>
<br />
<div style="margin-left: 5vw; margin-right: 5vw; font-size: 1em;">
        <p>
            <strong>Q:</strong> I'm a parent or a student, not a coach - how can I register? <br />
            <strong>A:</strong> MMT doesn't require you to be a coach! A parent can act as a coach (and register as a coach on ContestDojo) to create an organization and team(s) for their participating students. <strong>Students should not create coach accounts.</strong>
        </p>
        <p>
            <strong>Q:</strong> Why aren't there awards for high schoolers? <br />
            <strong>A:</strong> Our mission and tests are geared towards middle school mathematics, and thus our awards are as well. We welcome high school students to participate for the experience only.
        </p>
        <p>
            <strong>Q:</strong> You have three divisions, what are the differences? <br />
            <strong>A:</strong> Our Foal Division is for students in 6th grade and below and will have easier problems as compared to our Colt Division (7th grade) and Stallion Division (8th grade). Students may compete in divisions higher than their grade level but are not allowed to compete in lower divisions.
        </p>
        <p>
            <strong>Q:</strong> Where can I find practice material for the tests? How can we prepare? <br />

            <strong>A:</strong> You can take a look at our <a target="_blank" sveltekit:prefetch href="/past-tests">past tests</a>, and we also highly recommend looking at <a target="_blank" sveltekit:prefetch href="https://www.mathcounts.org/resources/past-competitions">past MathCounts</a>, <a target="_blank" sveltekit:prefetch href="https://artofproblemsolving.com/wiki/index.php/AMC_Problems_and_Solutions">AMC 8/10</a>, and <a target="_blank" sveltekit:prefetch href="https://www.ocf.berkeley.edu/~bmt/archive/">BmMT</a> tests as these are similar in level to the problems at MMT.
        </p>
</div>
</Dropdown>

<br>
<Heading text="Testimonials" size={2.5} textColor="#1B9AAA" />
<div class="grid-three" style="margin-left: 10vw; margin-right: 10vw;">
    <div>
        <Testimonial testimonial="This contest was the most organized one I've ever been to." title="MMT 2024" />
        <Testimonial testimonial="MMT was really fun and more focused on working as a team and thinking outside of the box than other competitions." title="MMT 2023" />
        <Testimonial testimonial="MMT set the bar very high for the next math tournament I participate in." title="MMT 2023" />
        <Testimonial testimonial="MMT has a unique take on standard math competitions." title="MMT 2022" />
        <Testimonial testimonial="MMT focused less on calculations than other math competitions." title="MMT 2022" />
    </div>

    <div>
        <Testimonial testimonial="Probably the best [math competition] so far in terms of theme and enjoyment." title="MMT 2024" />
        <Testimonial testimonial="I LOVED MMT this year so much and that's mostly due to the fantastic problems that you guys cook up. The rounds are ingenious and questions well written and overall MMT is a very wonderful competition indeed." title="MMT 2024" />
        <Testimonial testimonial="I loved all of the rounds. They were all different and interesting -- much more interesting than just a string of math problems." title="MMT 2023 Online" />
        <Testimonial testimonial="MMT's style of problems are much better than other tournaments. Unlike other tournaments that has the same style over the years, MMT has new and exciting styles of problems that makes it more fun to try and solve it on the spot" title="MMT 2022" />
    </div>
    
    <div>
        <Testimonial testimonial="I loved the quality of the competition as a whole, whether through their meticulous questions,  clear instructions, ingenious format, or cool hidden tricks MMT was awesome and exceeded all of my expectations for a math competition and I am for sure coming back next year!" title="MMT 2023" />
        <Testimonial testimonial="The concepts were very original and rounds were much more fun to participate in than the standard math competition." title="MMT 2023" />
        <Testimonial testimonial="I loved the creative format, the team emphasis, and the depth and complexity of problems." title="MMT 2023" />
        <Testimonial testimonial="I really appreciate all that MMT has done and I look forward to the competition that is held next year! I must say that the MMT was an impressive execution of math competitions unlike anything I've seen before!" title="MMT 2022" />
    </div>
</div> 
<br><br><br><br><br>
<style>
   
    li {
        list-style-type: disc;
        margin-left: 20px;
        margin-top:10px;
        font-size: 1.3rem;
    }

    .button {
		text-align: center;
		color: white;
		background-color: #1b9aaa;
		border-radius: 200px;
		text-decoration: none;
		padding: 15px 40px;
		width: fit-content;
		font-size: 30px;
		cursor: pointer;
		transition: all 0.2s ease-out;
	}

    p {
        font-size: 1.3rem;
    }
    .rounds {
        padding: 20px; 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>

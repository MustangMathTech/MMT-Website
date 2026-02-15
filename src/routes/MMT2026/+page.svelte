<script>
	import Heading from "$lib/components/Heading.svelte";
	import Dropdown from "$lib/components/Dropdown.svelte";
	import PageHeader from "$lib/components/PageHeader.svelte";
	import PanelBox from "$lib/components/PanelBox.svelte";
    import Section from '$lib/components/Section.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import Link from '$lib/components/Link.svelte';
    import SlideshowNew from "$lib/components/SlideshowNew.svelte";

    let windowWidth;

    const acceptableData = [
        {"Unnacceptable Answers": "61 x 17", "Acceptable Answers": "1037"},
        {"Unnacceptable Answers": "sin(π/10)", "Acceptable Answers": "(√5 - 1)/4"},
        {"Unnacceptable Answers": "1/√3", "Acceptable Answers": "√3/3"},
        {"Unnacceptable Answers": "61/31415", "Acceptable Answers": "1/515"},
        {"Unnacceptable Answers": "sin(π)", "Acceptable Answers": "0"},
    ]

     const contestPhotos = [
        "/3MT-2025/pics/im1.jpg",
        "/3MT-2025/pics/im2.jpg",
        "/3MT-2025/pics/im3.jpg",
        "/3MT-2025/pics/im4.jpg",
    ];

    const topicsCovered = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>",
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

    const testimonials = [
        {
            quote: "This is one of the best contests I did this year! It also was the longest, and I really liked the mystery puzzle!” ",
            author: "Leeoz Nebat",
            title: "Mustang Math Tournament Participant, Nevada 2025"
        },
        {
            quote: "MMT is one of the only math competitions which I am excited for instead of stressed. I love how engaging and interesting each round is.",
            author: "David Freeman",
            title: "MMT 2025 Coach, Northern California"
        }
    ]

   const locations = [
    { name: "Online", date: "04/11/2026", location: "At home!", early: "$8", earlyDate: "March 11", normal: "$10", normalDate: "March 28", late: "$15", lateDate: "April 4", note: "Online only if unable to attend in-person.", link: "https://comp.mt/student/1/21" },
    { name: "Colorado", date: "04/11/2026", location: "Angevine Middle School", address: "1150 W South Boulder Road, Lafayette, CO 80026", early: "$15", earlyDate: "March 11", normal: "$20", normalDate: "March 28", late: "$25", lateDate: "April 4",link: "https://comp.mt/student/1/29" },
    { name: "Florida", date: "04/04/2026", location: "Pine View School", address: "1 Python Path, Osprey, FL 34229", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 21", late: "$25", lateDate: "March 28", link: "https://comp.mt/student/1/30" },
    { name: "Georgia", date: "04/11/2026", location: "Old Atlanta Community Room", address: "810 Nichols Road, Suwanee, GA 30024", early: "$15", earlyDate: "March 11", normal: "$20", normalDate: "March 28", late: "$25", lateDate: "April 4", link: "https://comp.mt/student/1/28" },
    { name: "Massachusetts", date: "04/04/2026", location: "Thurston Middle School", address: "850 High St, Westwood, MA 02090", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 21", late: "$25", lateDate: "March 28", link: "https://comp.mt/student/1/24" },
    { name: "Michigan", date: "04/11/2026", location: "Novi High School", address: "24062 Taft Road, Novi, Michigan 48375", early: "$15", earlyDate: "March 11", normal: "$20", normalDate: "March 28", late: "$25", lateDate: "April 4", link: "https://comp.mt/student/1/33/" },
    { name: "Nevada", date: "03/28/2026", location: "Coral Academy of Science (Sandy Ridge)", address: "1051 Sandy Ridge Ave, Henderson, NV 89052", early: "$15", earlyDate: "Feb 21", normal: "$20", normalDate: "March 7", late: "$25", lateDate: "March 14", link: "https://comp.mt/student/1/32" },
    { name: "New Jersey", date: "04/04/2026", location: "Rutgers University", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 21", late: "$25", lateDate: "March 28", link: "https://comp.mt/student/1/27" },
    { name: "Northern California", date: "04/04/2026", location: "TBD", address: "San Jose / Fremont Area", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 21", late: "$25", lateDate: "March 28", link: "https://comp.mt/student/1/25" },
    { name: "Ohio", date: "04/12/2026", location: "The Wellington School", address: "3650 Reed Rd, Columbus, OH 43220", early: "$15", earlyDate: "March 12", normal: "$20", normalDate: "March 29", late: "$25", lateDate: "April 5" , link: "https://comp.mt/student/1/31"},
    { name: "Southern California", date: "03/21/2026", location: "Earl Warren Middle School", address: "155 Stevens Ave, Solana Beach, CA 92075", early: "$15", earlyDate: "Feb 21", normal: "$20", normalDate: "March 7", late: "$25", lateDate: "March 14", note: "Lunch is INCLUDED" , link: "https://comp.mt/student/1/26"},
    { name: "Washington", date: "04/04/2026", location: "TBD", address: "Most likely Kent, WA (Confirmed Feb)", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 21", late: "$25", lateDate: "March 28" , link: "https://comp.mt/student/1/23"},
    { name: "Illinois", date: "04/04/2026", location: "Hinsdale Central High School", address: "5500 S Grant St, Hinsdale IL 60521", early: "$15", earlyDate: "March 4", normal: "$20", normalDate: "March 28", late: "$25", lateDate: "TBD", link: "https://comp.mt/student/1/22" },
    { name: "Missouri", date: "TBD", location: "TBD", address: "Details coming soon", early: "$15", earlyDate: "TBD", normal: "$20", normalDate: "TBD", late: "$25", lateDate: "TBD", link: "https://comp.mt/student/1" }
  ];

    const potentialTopicImages = [
        "/3MT-2025/prevQuestions/im1.png",
        "/3MT-2025/prevQuestions/im2.png",
        "/3MT-2025/prevQuestions/im3.png",
        "/3MT-2025/prevQuestions/im4.png",
        "/3MT-2025/prevQuestions/im5.png",
    ];

</script>



<svelte:head>
	<title>MMT 2026</title>
</svelte:head>


<svelte:window bind:innerWidth={windowWidth} />

<PageHeader
	title="MMT 2026"
	description="Mustang Math Tournament 2026"
	button_url="https://comp.mt/student/1"
	button_text="Sign Up Here!"
	id="SignUpMMT"
/>

<Section>
    <br /> <br />
    <Heading text="What is MMT?" size={4} textColor="#1B9AAA" />
    <FlexBox>
        <PanelBox width="80%" style="min-width: 360px;">
             <p style="font-size: 1.2em; margin: 5px">
          Mustang Math Tournament (MMT) is a math competition designed for middle school students around the nation. MMT is organized by Mustang Math, a 501(c)(3) nonprofit organization led by high school students! Every round of MMT is <b>entirely team-based</b>, incentivizing students to collaborate in order to navigate the challenging and interesting problems and master the unique game-like rounds. All participants receive themed <b>t-shirts, stickers, and pins!</b>
<br>
<br>
<br>
Mustang Math Tournament is a unique and enriching experience for middle schoolers <b>regardless of math level and expertise.</b> Check out some comments from past participants below!
</p>
        </PanelBox>
    </FlexBox>
</Section>

<Section>
    <br /> <br />
    <Heading text="Free MMT Prep Seminar" size={4} textColor="#1B9AAA" />
    <FlexBox>
        <PanelBox width="80%" style="min-width: 360px;">
             <p style="font-size: 1.2em; margin: 5px">
         We are holding a free MMT prep seminar from 3/14-3/15 to help students prepare for the upcoming tournament. Join the <a href = 'https://classroom.google.com/c/NzQ5NDUyNDY2NjM1?cjc=7sogth4]! '>Google Classroom!</a>
</p>
        </PanelBox>
    </FlexBox>
</Section>

<Section>
    <div class="split-layout">

        <div class="column">
            <Heading text = "Past Contest Photos" size = {2} textColor="#1B9AAA"></Heading>
            <SlideshowNew images={contestPhotos} />
        </div>

        <div class="column">
        
        <div class="testimonials-section">
            <Heading text = "What people are saying" size = {2} textColor="#1B9AAA"></Heading>
            <p1>Collective testimonials for Mustang Math's competitions</p1><br><br>
            {#each testimonials as testimonial}
            <div class="testimonial">
                <p class="quote">"{testimonial.quote}"</p>
                <p class="author">- {testimonial.author}, {testimonial.title}</p>
            </div>
            {/each}
        </div>
    </div>
</div>
</Section>

<Section>
  <div class="header-container">
    <Heading text="Tournament Locations" size={4} textColor="#1B9AAA" />
    <p class="subtitle">Team Size: 3-4 (Incomplete teams of 1-2 may be merged with other teams to make a full team of 3-4)
      <br>
Register now for lower pricing! Scroll down for registration links, and <a href="https://docs.google.com/document/d/1UGQttaKlR3r7DLFzsrt4XUXEwxO6hV-2FyQwO6IC9aU/edit?usp=sharing">click here</a> for registration instructions!
    </p>
  </div>

  <div class="location-grid">
    {#each locations as loc}
      <div class="location-card">
        <div class="card-header">
          <span class="state-name">{loc.name}</span>
          <span class="date-badge">{loc.date}</span>
        </div>
        
        <div class="card-body">
          <p class="address"><strong>Location:</strong> {loc.location}  {loc.address !== undefined ? "("+loc.address+")" : ""}</p>
          
          <div class="pricing-section">
            <div class="price-item">
              <span>Early Equine</span>
              <strong>{loc.early}</strong>
              <small>Until {loc.earlyDate}</small>
            </div>
            <div class="price-item">
              <span>Normal</span>
              <strong>{loc.normal}</strong>
              <small>Until {loc.normalDate}</small>
            </div>
          </div>

          {#if loc.note}
            <p class="special-note">{loc.note}</p>
          {/if}
        </div>

        <a href={loc.link} class="reg-btn" target="_blank">Register for {loc.name}</a>
      </div>
    {/each}
  </div>
</Section>

<Section>
    <br /> <br />
    <Heading text="Registration Details" size={3} textColor="#1B9AAA" />
    
        <Dropdown mainText="Awards" size={2} textColor="#1B9AAA">
        <FlexBox>
            <p style="font-size: 1.2em; margin: 5px">Medals will be given to (at minimum) the members of the top 3 teams of each division, along with certificates of achievement to high-scoring teams and certificates of participation to all students. A wide variety of other prizes are available for top scoring teams and POTD top scorers!
</p>
        </FlexBox>
        </Dropdown>
    
    <Dropdown mainText="Rules">
        <p1 style="font-size: 1.2em; margin: 5px">
<Heading text = "General Rules" size = {1} textColor="#1B9AAA"></Heading>
No Cheating - This contest has a zero-tolerance cheating policy. Any evidence of cheating may lead to immediate disqualification, or any other punishment deemed appropriate by competition staff.
<br><br>
<ul>
    <li>No calculators, rulers, compasses, protractors, or other aids are permitted.</li>
    <li>You may not use the Internet or AI tools (e.g. ChatGPT) as a resource at any point during a test.
        <ul>
            <li>We may require individuals to provide a solution for a problem during the competition - so keep track of your work!</li>
        </ul>
    </li>
    <li>Team divisions are determined by the highest grade level amongst the team members
    <ul>
        <li>Eg: Teams with 1 or more 8th graders will be in the Stallion division, teams with 7th graders and below will be in the Colt division, and teams with 6th graders and below will be in the Foal division. </li>
        <li>Teams may choose to compete in a higher division, but may not compete in a lower division.</li>
    </ul>
    </li>
</ul>

<Heading text = "Answer Formatting Rules" size = {1} textColor="#1B9AAA"></Heading>
<ul>
    <li>Make sure you don’t have any extra calculations in your answers!</li>
    <li>For example, 78 and 285 is okay, but ½ + ⅓ is not. 
    Simplify radicals!</li>
    <li>Rewrite expressions like √63 into 3√7 and √(1/9) as ⅓ (exact decimal answers are also acceptable)</li>
    <li>Rationalize all denominators - write 1/√2 as √2/2 and 1/(√2 - 1) as √2 + 1</li>
    <li>No repeating sums / products!</li>
    1.333… should be submitted as 1 ⅓ and 2*2*2*2*2 as 32
    <li>If you have any further questions, please contact us at <Link target="_blank" url="mailto:tournament@mustangmath.com" text="tournament@mustangmath.com" />!</li>
</ul>

        </p1>
        <div class="acceptable-wrapper">
            <FlexBox>
                <PanelBox>
                    <Table data={acceptableData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
                </PanelBox>
            </FlexBox>
        </div>
    </Dropdown>
    <Dropdown mainText="Rounds">
        <Heading text = "Problem of The Day(POTD)" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px">The week before competition day, a question will be released each day to be done individually. Students will be ranked based on time and accuracy! </p>
        
        <Heading text = "Mounting Mayhem (Puzzle)" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px"><ul><li><p style="font-size: 1.2em; margin: 5px">The Mounting Mayhem Round will consist of a series of progressively harder logic puzzles. Students will have 15 minutes to learn the rules and basic strategy of the puzzles, then 60 minutes to solve as many of them as possible.</p></li>
<li><p style="font-size: 1.2em; margin: 5px">Puzzles often require out-of-the-box thinking although all topics can readily be understood and grasped by middle schoolers.</p></li>
<li><p style="font-size: 1.2em; margin: 5px">Harder puzzles will be worth more points, but these puzzles will be longer and/or require more creativity — you must decide what problems to focus your time on to optimize your team score.</p></li>
</ul><Heading text = "Herding Hexes" size = {1} textColor="#1B9AAA"></Heading>
<p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">
  <ul>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The “Herding Hexes” Round will consist of 26 questions to be solved in 45 minutes.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The questions will be laid out on a grid of connected hexagons, with more difficult problems being located furthest from the center.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">Your score in the round will be determined by the problems you get correct, with bonus points available for having more correct answers connected within the grid!</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">You are not necessarily expected to solve all the questions in this round within the allotted time. Instead, we encourage you to strategize how you might use your time to maximize your points!</p></li>
  </ul>


<Heading text = "Mystery Mare" size = {1} textColor="#1B9AAA"></Heading>
<p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">
  <ul>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The Mystery Mare round is exactly that — a mystery! The rules of the round will be revealed on competition day.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">Hints about the nature of the round may be revealed as the competition date nears.</p></li>
  </ul>


<Heading text = "Relay Rodeo" size = {1} textColor="#1B9AAA"></Heading>
<p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">
  <ul>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The Relay Rodeo Round will consist of 16 questions to be solved in 45 minutes.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The questions will be divided into 4 sets of 4 questions each, and team members will each be assigned one problem in each set, where the answer to the first question is used to answer the second question, and so on.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">All four sets will be happening at once, so each member of each team will receive exactly four questions to complete.</p></li>
    <li><p style="font-size: 1.2em; margin: 5px" textColor="#1B9AAA">The problems in each set will get progressively more difficult; however, the difficulty of each set is relatively equal across sets, so problem 16 isn’t much harder than problem 4.</p></li>
  </ul>

    </Dropdown>
    <Dropdown mainText="Potential Topics Covered">
         {#if windowWidth > 1000}
                <Table data={topicsCovered} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/1200}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/1500}em;" />
                {:else if windowWidth > 800}
                <Table data={topicsSmall1} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/800}em;" />
                <Table data={topicsSmall2} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/800}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/800}em;" />
                {:else}
                <Table data={topicsAlgebra} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsCombo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsGeo} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                <Table data={topicsNT} width="100%" headerColor="#1B9AAA" rowColors={["#A4D6AF"]} cellPadding={5} cellPaddingRight={20} textSize={1} cellStyle="vertical-align: top; font-size: {windowWidth/500}em;" tableStyle="table-layout: fixed; padding: 10px;" headerStyle="font-size: {windowWidth/500}em;" />
                {/if}
    </Dropdown>
    <Dropdown mainText = "Sample Problems">
        <SlideshowNew images={potentialTopicImages}></SlideshowNew>
    </Dropdown>
</Section>


<style>
.split-layout {
display: flex;
flex-wrap: wrap; /* Allows columns to stack on smaller screens */
gap: 30px; /* Space between the two columns */
}

.column {
flex: 1; /* Each column will take up equal space */
min-width: 300px; /* Ensures columns don't get too squished before wrapping */
}


/* Testimonial Styles */
.testimonial {
background-color: #f9f9f9;
padding: 20px;
border-radius: 8px;
margin-bottom: 20px;
border-left: 4px solid #ddd;
max-width: 800px;
}

.testimonial .quote {
font-style: italic;
color: #555;
margin-bottom: 10px;
}

.testimonial .author {
font-weight: bold;
text-align: right;
color: #333;
}

/* Responsive behavior for smaller screens */
@media (max-width: 768px) {
.split-layout {
    flex-direction: column; /* Stack columns vertically */
}
}

.header-container { text-align: center; margin-bottom: 2rem; }
  .subtitle { color: #666; font-style: italic; margin-top: -10px; }

  .location-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  .location-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .location-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  .card-header {
    background: #f8fafc;
    padding: 15px;
    border-bottom: 3px solid #1B9AAA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px 12px 0 0;
  }

  .state-name { font-weight: 800; font-size: 1.2rem; color: #333; }

  .date-badge {
    background: #1B9AAA;
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .card-body { padding: 20px; flex-grow: 1; }
  .address { font-size: 0.95rem; margin-bottom: 15px; min-height: 40px; }

  .pricing-section {
    display: flex;
    justify-content: space-between;
    background: #f1f5f9;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .price-item { display: flex; flex-direction: column; text-align: center; }
  .price-item span { font-size: 0.75rem; text-transform: uppercase; color: #64748b; }
  .price-item strong { font-size: 1.1rem; color: #1e293b; }
  .price-item small { font-size: 0.7rem; color: #94a3b8; }

  .special-note {
    font-size: 0.85rem;
    color: #b45309;
    background: #fffbeb;
    padding: 8px;
    border-radius: 4px;
    border-left: 3px solid #f59e0b;
  }

  .reg-btn {
    display: block;
    text-align: center;
    background: #1B9AAA;
    color: white;
    text-decoration: none;
    padding: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    border-radius: 0 0 11px 11px;
    transition: background 0.2s;
  }

  .reg-btn:hover { background: #167d8a; }
</style>




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

    const scheduleData = [
        {"Day": "9/20 to 9/27", "Start Time (PT)": "All Day", "Event": "Perilous Proofs"},
        {"Day": "9/27", "Start Time (PT)": "9:00 AM", "Event": "Opening Ceremony"},
        {"Day": "9/27", "Start Time (PT)": "9:30 AM", "Event": "Solo Stampede"},
        {"Day": "9/27", "Start Time (PT)": "10:45 AM", "Event": "Lucnh"},
        {"Day": "9/27", "Start Time (PT)": "12:00 PM", "Event": "Betting Bonanza"},
        {"Day": "9/27", "Start Time (PT)": "1:00 PM", "Event": "Meltdown Madness"},
        {"Day": "9/27", "Start Time (PT)": "2:15 PM", "Event": "Activities"},
        {"Day": "9/27", "Start Time (PT)": "4:30 PM", "Event": "Awards"},
    ];

    const acceptableData = [
        {"Unnacceptable Answers": "61 x 17", "Acceptable Answers": "1037"},
        {"Unnacceptable Answers": "sin(π/10)", "Acceptable Answers": "(√5 - 1)/4"},
        {"Unnacceptable Answers": "1/√3", "Acceptable Answers": "√3/3"},
        {"Unnacceptable Answers": "61/31415", "Acceptable Answers": "1/515"},
        {"Unnacceptable Answers": "sin(π)", "Acceptable Answers": "0"},
    ]

    const contestPhotos = [
        "https://placehold.co/800x600/333/FFF?text=Contest+Photo+1",
        "https://placehold.co/800x600/555/FFF?text=Contest+Photo+2",
        "https://placehold.co/800x600/777/FFF?text=Contest+Photo+3",
    ];
    const potentialTopicImages = [
        "/3MT-2025/prevQuestions/im1.png",
        "/3MT-2025/prevQuestions/im2.png",
        "/3MT-2025/prevQuestions/im3.png",
        "/3MT-2025/prevQuestions/im4.png",
        "/3MT-2025/prevQuestions/im5.png",
    ];

    const testimonials = [
        {
            quote: "Lorem Ipsum Dolor",
            author: "John Doe",
            title: "Previous Winner"
        },
        {
            quote: "Hmm hmm yes very fun",
            author: "Bread",
            title: "Supreme Overlord of Math"
        }
    ]

    const sponsors = [
        { name: "BreadIndustries", logoUrl: "https://hudsonbread.com/wp-content/uploads/2020/07/67402-FREEFORM-RYE-PLAIN.jpg", website: "#" },
    ];
</script>

<svelte:head>
	<title>M^3</title>
</svelte:head>

<PageHeader
	title="M^3"
	description="Mustang Math Mania"
	button_url="https://docs.google.com/document/d/1mKKPEXknc3b3zCBVsDkkrhutKylvl3_0lo46VCr3F34/edit?usp=sharing"
	button_text="Register Now"
	id="registerFor3MT"
/>

<Section>
    <br /> <br />
    <Heading text="What is M^3?" size={4} textColor="#1B9AAA" />
    <FlexBox>
        <PanelBox width="80%" style="min-width: 360px;">
            <p style="font-size: 1.2em; margin: 5px">
Mustang Math Mania is a middle school math competition run for students around the nation. It is put together by Mustang Math, a 501(c)(3) nonprofit organization made up of high school and college students!
<br><br>
The tournament is centered around teamwork and collaboration, incentivizing students to work with their teams not only to navigate the challenging but interesting problems of the tournament, but also to develop strategies to master the unique and fun game-like rounds. Kicking off the week prior to the tournament with a proof based round tailored towards middle school students, and continuing with innovative and interesting rounds such as “the ground is lava” and a risky gambling round, our tournaments are filled with fun and excitement for students at all levels. 
<br><br>
Don't believe us? Check out some comments from past participants below!
<br><br>
DATE: September 27th, 2025 <br>
TEAM SIZE: 3-4*<br>
LOCATION: Online<br>
EARLY EQUINE COST: $8 per participant (Register before August 31st, 2025)<br>
NORMAL COST: $10 per participant (Register before September 13th, 2025)<br>
LATE COST: $15 per participant (Register before September 20th, 2025)<br>
<br><br>
<b><a href = "https://docs.google.com/document/d/1mKKPEXknc3b3zCBVsDkkrhutKylvl3_0lo46VCr3F34/edit?usp=sharing">Click Here To Access Registration Instructions</a></b><br>
<br><br>

*: Incomplete teams of 1-2 may be merged with other teams to make a full team of 3-4
            </p>
        </PanelBox>
    </FlexBox>
</Section>

<Section>
    <br /> <br />
    <Heading text="Intro to Proofs Seminar!!!" size={3} textColor="#FF2E00" />
    <FlexBox>
        <PanelBox width="60%" style="min-width: 360px;">
            <p style="font-size: 1.2em; margin: 5px">
In addition to the competition itself, we are hosting 2 free Intro to Proofs classes to prepare students for the week-long proof round in MMM! Class 1 will cover logic and proof techniques like contradiction. Class 2 will be slightly more challenging and focus on induction. These classes will be a great opportunity to gain a head start and develop stronger mathematical foundations. Proof techniques, which aren’t covered in a typical middle school classroom will benefit both students with no proof experience and experienced problem solvers. If interested, please join the <b><a href = "https://classroom.google.com">google classroom</a></b> with the code JRIXSGAY.
            </p>
        </PanelBox>
    </FlexBox>
</Section>

<Section>
    <br /> <br />
    <Heading text="Registration Details" size={3} textColor="#1B9AAA" />
    <div>
        <Heading text="Schedule" size={2} textColor="#1B9AAA" />
        <div class="schedule-wrapper">
            <FlexBox>
                <PanelBox>
                    <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
                </PanelBox>
            </FlexBox>
        </div>
    </div> <br />
    <div>
        <Heading text="Awards" size={2} textColor="#1B9AAA" />
        <FlexBox>
            <p style="font-size: 1.2em; margin: 5px">We will be awarding the top teams of each division with <p1 style="color: red">$10 Amazon Gift Cards!</p1></p>
        </FlexBox>
    </div>
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
    <li>For example, 78 and 285 is okay, but ½ + ⅓ is not
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
        <Heading text = "Proof Round" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px">The week before competition day, teams will compete in a proof-writing competition. This round will consist of various problems in which students must either compute an answer, explain their reasoning, or write mathematically sound proofs to demonstrate why some property holds true.</p>
        
        <Heading text = "Solo Stampede" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px">Students will compete individually to answer a 25 question test in 60 minutes. These individual scores will be factored into the team score at the end.</p>
        
        <Heading text = "Meltdown Madness" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px">Teams will compete in a 25 question test over 25 minutes. After the first minute, problem #1 will sink and become unsolvable. Every minute, the next problem will sink until all 25 problems become locked (new answers can not be submitted). Students will only earn points on unlocked problems solved correctly.</p>

        <Heading text = "Betting Bonanza:" size = {1} textColor="#1B9AAA"></Heading>
        <p style="font-size: 1.2em; margin: 5px">Teams start with 100 points and 5 problem sets, each with a multiplier, (1.5, 2, 2.5, 3, and 3.5). Teams can then bet/allocate their points to sets before seeing problems, keeping any unused points. Over the next 45 minutes, teams work to solve the 25 problems. Each full set correctly solved returns the bet points multiplied, no points otherwise. Teams also earn 2 bonus points per correct problem, with a maximum of 50 bonus points.</p>
    </Dropdown>
    <Dropdown mainText="Potential Topics Covered">
        <SlideshowNew images={potentialTopicImages}></SlideshowNew>
    </Dropdown>
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
            {#each testimonials as testimonial}
            <div class="testimonial">
                <p class="quote">"{testimonial.quote}"</p>
                <p class="author">- {testimonial.author}, {testimonial.title}</p>
            </div>
            {/each}
        </div>

        <div class="sponsors-section">
            <Heading text = "Our Sponsors" size = {2} textColor="#1B9AAA"></Heading>
            <div class="sponsors-grid">
            {#each sponsors as sponsor}
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" class="sponsor-logo">
                <img src={sponsor.logoUrl} alt="{sponsor.name} Logo" />
                </a>
            {/each}
            </div>
        </div>

    </div>
</div>
</Section>


<style>
.split-layout {
display: flex;
flex-wrap: wrap; /* Allows columns to stack on smaller screens */
gap: 40px; /* Space between the two columns */
}

.column {
flex: 1; /* Each column will take up equal space */
min-width: 300px; /* Ensures columns don't get too squished before wrapping */
}

.column-title {
font-size: 1.8rem;
color: #333;
margin-bottom: 20px;
border-bottom: 2px solid #eee;
padding-bottom: 10px;
}

/* Testimonial Styles */
.testimonial {
background-color: #f9f9f9;
padding: 20px;
border-radius: 8px;
margin-bottom: 20px;
border-left: 4px solid #ddd;
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

/* Sponsor Styles */
.sponsors-section {
margin-top: 40px;
}

.sponsors-grid {
display: flex;
flex-wrap: wrap;
gap: 20px;
align-items: center;
}

.sponsor-logo img {
max-width: 150px;
opacity: 0.7;
transition: opacity 0.3s ease;
}

.sponsor-logo:hover img {
opacity: 1;
}

/* Responsive behavior for smaller screens */
@media (max-width: 768px) {
.split-layout {
    flex-direction: column; /* Stack columns vertically */
}
}
</style>
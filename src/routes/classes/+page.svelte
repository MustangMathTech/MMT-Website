<script>
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { onMount } from "svelte";

    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";
    let background2 = "right-arrow.png";

    onMount(() => {
        visible = true;
    })

    function toggleBackground() {
        if (background == "right-arrow.png") {
            background = "right-arrow-shaded.png";
        } else {
            background = "right-arrow.png";
        }
    }

    function toggleBackground2() {
        if (background2 == "right-arrow.png") {
            background2 = "right-arrow-shaded.png";
        } else {
            background2 = "right-arrow.png";
        }
    }

    let y;

    let scheduleData = [
        { "Class": "Beginner 1", "Day of Week": "Sundays", "Time (PT)": "2:30 - 4:00 PM"},
        { "Class": "Beginner 2", "Day of Week": "Saturdays", "Time (PT)": "4:00 - 5:30 PM"},
        { "Class": "Intermediate", "Day of Week": "Tuesdays", "Time (PT)": "5:30 - 7:00 PM"}
    ]
    
    let topicsData = [
        { "Week": "1", "Dates": "Apr 6 - Apr 12", "Beginner": "Divisibility, Multiples, Factors", "Intermediate": "Beginner Weeks 1-2" },
        { "Week": "2", "Dates": "Apr 13 - Apr 19", "Beginner": "GCD/LCM, Modulo, Remainder Theorem", "Intermediate": "Beginner Weeks 3-4" },
        { "Week": "3", "Dates": "Apr 20 - Apr 26", "Beginner": "Basic Lemmas, Divisibility Rules", "Intermediate": "Euclidean Algorithm, Chinese Remainder Theorem, Fermat’s Little Theorem" },
        { "Week": "4", "Dates": "Apr 27 - May 3", "Beginner": "Modular Equivalences + Number Theory Review", "Intermediate": "Number Theory Review" },
        { "Week": "5", "Dates": "May 4 - May 10", "Beginner": "Permutations and Combinations", "Intermediate": "Beginner Weeks 5-6" },
        { "Week": "6", "Dates": "May 11 - May 17", "Beginner": "Committees, Complementary Counting, Counting Factors", "Intermediate": "Beginner Weeks 7-8" },
        { "Week": "7", "Dates": "May 18 - May 24", "Beginner": "Principle of Inclusion Exclusion, Venn Diagrams", "Intermediate": "States and Combinatorial Identities" },
        { "Week": "8", "Dates": "May 25 - May 31", "Beginner": "Conditional Probability", "Intermediate": "Combinatorics Review" },
    ]


    onMount(() => {
        if (windowWidth && windowWidth < 700) {
            for (var i = 0; i < topicsData.length; i++) {
                var string = topicsData[i]["Dates"];
                var stringBetter = string.replaceAll("January", "Jan.").replaceAll("February", "Feb.").replaceAll("March", "Mar.").replaceAll("April", "Apr.").replaceAll("June", "Jun.").replaceAll("July", "Jul.").replaceAll("August", "Aug.").replaceAll("September", "Sep.").replaceAll("October", "Oct.").replaceAll("November", "Nov.").replaceAll("December", "Dec.");
                topicsData[i]["Dates"] = stringBetter;
            }
            for (var i = 0; i < scheduleData.length; i++) {
                let string = scheduleData[i]["Day of Week"];
                let stringBetter = string.replaceAll("Sunday", "Sun.").replaceAll("Monday", "Mon.").replaceAll("Tuesday", "Tue.").replaceAll("Wednesday", "Wed.").replaceAll("Thursday", "Thu.").replaceAll("Friday", "Fri.").replaceAll("Saturday", "Sat.");
                scheduleData[i]["Day of Week"] = stringBetter;
                string = scheduleData[i]["Class"];
                stringBetter = string.replaceAll("Intermediate", "Int").replaceAll("Beginner", "Beg").replaceAll("Office Hours", "OH");
                scheduleData[i]["Class"] = stringBetter;
            }
        }

    })
</script>
<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<PageHeader title="Classes" description="Online Math Contest Prep Classes" button_url="https://forms.gle/FuBEBckKQm3QDJUz5" button_text="	Class Registration!	" id="register"/>

<br><br>

<Heading text="Summary" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><strong>Mustang Math Classes</strong> focus on <strong>competition math</strong> and are split into 4 quarters: Algebra, Geometry, Combinatorics/Number Theory, and Problem Solving, with each term running for <strong>8 weeks</strong>. Our upcoming <a href="#topicSection"><strong>Discrete term</strong></a> will alternate between <strong>lectures and problem solving</strong>, allowing for students to gain a stronger understanding of the material.</p>  
        <p style="font-size: 1.5em; text-align: center;">Instructive sessions run for <strong>90 minutes</strong> every week over Zoom. Each class will have 5-15 students and 2 instructors.</p>
        <p style="font-size: 1.5em; text-align: center;">The total cost for the 8 sessions is <strong>$100</strong>, or all 32 sessions for <strong>$320</strong>. Financial aid is available upon request. As a nonprofit, we charge for our classes to improve our classes and tournaments. Furthermore, putting a price on our classes encourages students to <a href="https://er.educause.edu/articles/2013/6/retention-and-intention-in-massive-open-online-courses-in-depth">stay committed</a>.</p> 
    </PanelBox>
</div> 
<br />
<br />

<Heading text="Prizes" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">All students who put in effort into our classes will receive a personalized certificate of completion and a <strong>$10 gift card!</strong> This means 100% class attendance and homework completion.</p> 
    </PanelBox>
</div> 
<br />
<br />

<!--<Heading text="Benefits of MM Classes" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;" id="benefitsSection">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><strong>Structure</strong></p>  
        <p style="font-size: 1.5em; text-align: center;">This upcoming geometry term alternates between lectures + problem solving sessions. In total, slideshow lectures contain around 250+ slides, and problemsets contain 150+ practice problems. Homework between lectures and problem solving sessions will feature Gimkit games to solidify student understanding of basic concepts.</p>
        <p style="font-size: 1.5em; text-align: center;">Students can also request feedback on their homework submitted through google classroom. <a href="https://drive.google.com/drive/folders/1zD7pfsExHnB4pD2lxfWNoU7Fj42kQ0Nw">Sample class material and sample feedback.</a> Instructors will provide both group and one-on-one guidance on specific problems during problem solving sessions (every other week).</p>
        <br />

        <p style="font-size: 1.5em; text-align: center;"><strong>Point-Based Problemsets</strong></p>  
        <p style="font-size: 1.5em; text-align: center;">There are <strong>four problemsets (six for Intermediate)</strong>, each consisting of <strong>30 problems</strong> of varying difficulty. These serve as both classwork and homework. Students are not expected to solve all 30 problems; instead, they choose ones that interest them and can continue challenging themselves on more difficult problems even after the class has ended. Each problem has a different point value, and students “complete” their homework once they reach a point total.</p>
        <br />

        <p style="font-size: 1.5em; text-align: center;"><strong>Prizes</strong></p>  
        <p style="font-size: 1.5em; text-align: center;">All students who put in <strong>effort</strong> into our classes will receive a personalized certificate of completion and a <strong>$10 gift card</strong>! This includes attending every class (unless communicated ahead of time) and completing all the homework.</p>
        <br />
    </PanelBox>
</div> 
<br />
<br /> -->

<Heading text="Friend Referrals" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;" id="benefitsSection">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Mustang Math’s goal is to spread our love for math. We are offering a new friend referral program, for which if you refer a paying student to our classes, <strong>both you and the new student will receive a $10 gift card</strong> at the end of the term! This offer stacks, meaning the more friends you refer, the larger your discount will be.</p>  
    </PanelBox>
</div> 
<br />
<br />


<Heading text="Topic-Based Courses" size={2.5} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Competition initials="A" imgSource="classes/fx.png" competition="Algebra" description="Invariably fun. Key topics include Polynomials, Sequences, and Inequalities." />
        <Competition initials="G" imgSource="classes/compass.png" competition="Geometry" description="Just plane interesting. Key topics include Similar Triangles, Circles, and 3D Geometry" />
        <Competition initials="C/NT" imgSource="classes/dice.png" competition="Discrete" description="You can always count on it. Key topics include Counting Techniques, Distinguishability, Probability, Primes, Bases, and Modular Arithmetic" />
        <Competition initials="PS" imgSource="classes/numbers.png" competition="Problem Solving" description="Prime learning material. Key focus is on preparing students for the AMC Series and other contests that come in the Fall." />
    </FlexBox>
</div> <br />

<h1 id="topicSection"><strong style="color: #1b9aaa;">Current Term: Discrete</strong></h1>

<Heading text="Class Details" size={2} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">This term will cover Discrete (Combinatorics and Number Theory). It will start on the week of <strong>April 6th</strong> and runs through the week of <strong>May 31st, 2025</strong>. We have two levels of classes: <strong>Beginner Discrete (AMC 8/10)</strong> and <strong>Intermediate Discrete (AMC 10/12/AIME)</strong>. See below for the weekly schedule and breakdown of topics! If you're interested in participating, make sure to fill out the <a href="https://forms.gle/FuBEBckKQm3QDJUz5"><strong>registration form</strong></a>. If you have any questions, please email <a href="mailto:classes@mustangmath.com">classes@mustangmath.com</a>.</p>
    </PanelBox>
</div> <br />
<br />

<Heading text="Weekly Schedule" size={2} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
            {#if windowWidth < 700}
                <p>OH = Office Hours</p>
            {/if}
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<Heading text="Classes Schedule" size={2} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={topicsData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<!--<Sidebar />-->

<style>
    strong {
        color: #1b9aaa;
    }

    a, a strong {
        color: #ff3e00;
    }
</style>
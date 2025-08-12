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
        { "Class": "Intermediate 1", "Days of Week": "Tuesdays + Thursdays", "Time (PT)": "5:00 - 6:30 PM"},
        { "Class": "Intermediate 2", "Days of Week": "Saturdays + Sundays", "Time (PT)": "1:00 - 2:30 PM"},
        { "Class": "Beginner 1", "Days of Week": "Mondays + Fridays", "Time (PT)": "5:30 - 7:00 PM"},
        { "Class": "Beginner 2", "Days of Week": "Tuesdays + Thursdays", "Time (PT)": "3:15 - 4:45 PM"}
        
    ]
    
    let topicsData = [
        { "Week": "1", "Dates": "Jul 14 - Jul 20", "Beginner": "Algebra A, Algebra B", "Intermediate": "Algebra A, Algebra B" },
        { "Week": "2", "Dates": "Jul 21 - Jul 27", "Beginner": "Geometry A, Geometry B", "Intermediate": "Geometry A, Geometry B" },
        { "Week": "3", "Dates": "Jul 28 - Aug 3", "Beginner": "Counting A, Counting B", "Intermediate": "Counting A, Counting B" },
        { "Week": "4", "Dates": "Aug 4 - Aug 10", "Beginner": "Number Theory A, Number Theory B", "Intermediate": "Number Theory A, Number Theory B" }
    ]


    onMount(() => {
        if (windowWidth && windowWidth < 700) {
            for (var i = 0; i < topicsData.length; i++) {
                var string = topicsData[i]["Dates"];
                var stringBetter = string.replaceAll("January", "Jan.").replaceAll("February", "Feb.").replaceAll("March", "Mar.").replaceAll("April", "Apr.").replaceAll("June", "Jun.").replaceAll("July", "Jul.").replaceAll("August", "Aug.").replaceAll("September", "Sep.").replaceAll("October", "Oct.").replaceAll("November", "Nov.").replaceAll("December", "Dec.");
                topicsData[i]["Dates"] = stringBetter;
            }
            for (var i = 0; i < scheduleData.length; i++) {
                let string = scheduleData[i]["Days of Week"];
                let stringBetter = string.replaceAll("Sunday", "Sun.").replaceAll("Monday", "Mon.").replaceAll("Tuesday", "Tue.").replaceAll("Wednesday", "Wed.").replaceAll("Thursday", "Thu.").replaceAll("Friday", "Fri.").replaceAll("Saturday", "Sat.");
                scheduleData[i]["Days of Week"] = stringBetter;
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
<div class="page-container">
    <div class="background"></div>
    <PageHeader title="Classes" description="Online Math Contest Prep Classes" button_url="https://docs.google.com/forms/d/e/1FAIpQLScHT_pnmm_nhQq3YAk_1s3oq6yxFjgKqhNwg-6YgjAvREb9yg/viewform?usp=dialog" button_text="Class Registration!" id="register"/>

    <br><br>

    <Heading text="Summary" size={2.5} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <p style="font-size: 1.5em; text-align: center;"><strong>Mustang Math Classes</strong> prepare students for <strong>math competitions</strong> through four terms: Algebra, Geometry, Combinatorics/Number Theory, and Problem Solving. Our current <a href="#classDetails"><strong>Problem Solving term</strong></a> runs for <strong>4 weeks</strong>, with two sessions per week. Each session consists of 90-minute Zoom classes with 5-15 students and 2 instructors.</p>  
            <p style="font-size: 1.5em; text-align: center;">The program fee is <strong>$100</strong> for all 8 sessions, with financial aid available upon request. As a nonprofit, we charge for our classes to fund our tournaments while promoting student commitment.</p> 
        </PanelBox>
    </div> 

   

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

    <!--<Heading text="Friend Referrals" size={2.5} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;" id="benefitsSection">
        <PanelBox>
            <p style="font-size: 1.5em; text-align: center;">Mustang Math’s goal is to spread our love for math. We are offering a new friend referral program, for which if you refer a paying student to our classes, <strong>both you and the new student will receive a $10 gift card</strong> at the end of the term! This offer stacks, meaning the more friends you refer, the larger your discount will be.</p>  
        </PanelBox>
    </div> 
    <br />
    <br /> -->


    <Heading text="Class Details" size={2} textColor="#1B9AAA" />
    <div id="classDetails" style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <p style="font-size: 1.5em; text-align: center;">
                Our <strong>Problem Solving</strong> term runs from the week of <strong>July 20th</strong> through the week of <strong>August 10th 2025</strong>. We offer two program levels:
            </p>
            <ul style="font-size: 1.5em; text-align: center; list-style: none; padding: 0;">
                <li><strong>Beginner Problem Solving</strong> (AMC 8 - Little to no competition experience)</li>
                <li><strong>Intermediate Problem Solving</strong> (AMC 10 - Some competition experience)</li>
            </ul>
            <p style="font-size: 1.5em; text-align: center;">
                Each week will focus on problems from a different topic: Week 1 on Algebra, Week 2 on Geometry, Week 3 on Counting, and Week 4 on Number Theory.
            </p>
            <p style="font-size: 2em; text-align: center;">
                Click to view the <a href="https://docs.google.com/forms/d/e/1FAIpQLScHT_pnmm_nhQq3YAk_1s3oq6yxFjgKqhNwg-6YgjAvREb9yg/viewform?usp=dialog"><strong>registration form</strong></a>.
            </p>
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

    <Heading text="Syllabus and Sample Material" size={2} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <p style="font-size: 1.5em; text-align: center;">
                Access our <a href="https://docs.google.com/document/d/1TZ4GmeDLvG0WkgciCjWNMPgKHBbD84AV2C4Ls6P5qys/edit?tab=t.0" target="_blank"><strong>syllabus</strong></a>. The document outlines class schedules, student expectations, and includes sample materials.
            </p>
            <p style="font-size: 1.5em; text-align: center;">
                Students who maintain attendance and complete all assignments will receive a personalized certificate and a <strong>$10 gift card</strong> in recognition of their dedication!
            </p>
        </PanelBox>
    </div> <br />
    <br />

    <Heading text="Problem Hints and Instructor Guidance" size={2} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <p style="font-size: 1.5em; text-align: center;">
                All of our homework problems have <strong>hints</strong> and <strong>answers</strong>, which guide you toward the solution while still allowing you to <strong>develop your problem-solving skills.</strong> If you need additional help, our instructors are here to help! You can <strong>upload your homework</strong> on Google Classroom and receive feedback and guidance from our instructors, ensuring you fully understand the concepts and strategies.</p>
            <p style="font-size: 1.5em; text-align: center;">
                If your student needs additional help, <strong>free 1-on-1 office hours</strong> are available upon request.
            </p>
        </PanelBox>
    </div> <br />
    <br />

    <Heading text="Frequently Asked Questions" size={2} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <div style="font-size: 1.5em; text-align: center;">
                <p style="margin-bottom: 0.5em;"><strong>Are the Zoom classes recorded?</strong></p>
                <p style="margin-bottom: 2em;">Yes, all classes are recorded and made available to students. If you miss a class or want to review the material, you can access the recordings.</p>

                <p style="margin-bottom: 0.5em;"><strong>Can I sign up late? Will I still be able to access Week 1 materials?</strong></p>
                <p style="margin-bottom: 2em;">Yes, you can join after classes have started. You'll have access to all previous class recordings, homework problems, and materials from earlier weeks.</p>

                <p style="margin-bottom: 0.5em;"><strong>Can I switch between Beginner and Intermediate levels?</strong></p>
                <p style="margin-bottom: 2em;">Yes, you can switch between levels if you find that one better suits your needs. Please email us. </p>

                <p style="margin-bottom: 0.5em;"><strong>How to contact you?</strong></p>
                <p style="margin-bottom: 2em;">For questions, contact <a href="mailto:classes@mustangmath.com">classes@mustangmath.com</a>.</p>
            </div>
        </PanelBox>
    </div> <br />
    <br />

    <Heading text="Topic-Based Courses" size={2.5} textColor="#1B9AAA" />
    <div class="competition-wrapper">
        <FlexBox align="start">
            <Competition initials="A" imgSource="classes/fx.png" competition="Algebra" description="Invariably fun. Key topics include Polynomials, Sequences, and Inequalities." />
            <Competition initials="G" imgSource="classes/compass.png" competition="Geometry" description="Just plane interesting. Key topics include Similar Triangles, Circles, and 3D Geometry" />
            <Competition initials="C/NT" imgSource="classes/dice.png" competition="Discrete" description="You can always count on it. Key topics include Counting Techniques, Distinguishability, Probability, Primes, Bases, and Modular Arithmetic" />
            <Competition initials="PS" imgSource="classes/numbers.png" competition="Problem Solving" description="Prime learning material. Key focus is on preparing students for the AMC Series and other contests that come in the Fall. This is the current term." />

        </FlexBox>
    </div> <br />

    <Heading text="Student Testimonials" size={2.5} textColor="#1B9AAA" />
    <div style="margin-left: 10vw; margin-right: 10vw;">
        <PanelBox>
            <div style="display: flex; flex-direction: column; gap: 2em;">
                <p style="font-size: 1.5em; text-align: center; font-style: italic;">
                    "The instructors were very patient and gave opportunity to the student to explain their answers. The follow-up on homework submissions was great!"
                    <br>
                    <span style="font-style: normal; font-size: 0.9em; color: #666;">— Indira, Grade 6 Student</span>
                </p>
                
                <p style="font-size: 1.5em; text-align: center; font-style: italic;">
                    "I like that there are many topics being learnt each day, and that we also get to work on our HW in class sometimes."
                    <br>
                    <span style="font-style: normal; font-size: 0.9em; color: #666;">— Venkata, Grade 5 Student</span>
                </p>
                
                <p style="font-size: 1.5em; text-align: center; font-style: italic;">
                    "I like the content taught and how informative it is. There are a lot of important concepts useful for competition math."
                    <br>
                    <span style="font-style: normal; font-size: 0.9em; color: #666;">— Samriddhi, Grade 8 Student</span>
                </p>

                <p style="font-size: 1.5em; text-align: center; font-style: italic;">
                    "The homework set is a good practice problem set, it lets us apply our learning to problems, which fit the class."
                    <br>
                    <span style="font-style: normal; font-size: 0.9em; color: #666;">— Shlok, Grade 7 Student</span>
                </p>
            </div>
        </PanelBox>
    </div>
</div>
    <!--<Sidebar />-->

    <style>
        strong {
            color: #1b9aaa;
        }

        a, a strong {
            color: #ff3e00;
        }

        .page-container {
            position: relative;
            z-index: 1;
            min-height: 100vh;
            width: 100%;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-image: url('/classes/classesbackground.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;
        }
    </style>
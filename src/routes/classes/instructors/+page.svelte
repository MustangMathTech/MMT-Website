<script>
    import InfoPerson from '$lib/components/InfoPerson.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { onMount } from "svelte";

    let windowWidth;
</script>
<svelte:window bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Classes | Instructors</title>
</svelte:head>

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://docs.google.com/forms/d/e/1FAIpQLScHT_pnmm_nhQq3YAk_1s3oq6yxFjgKqhNwg-6YgjAvREb9yg/viewform?usp=dialog" button_text="Class Registration!" id="registerBeginner"/>

<br><br>

<FlexBox wrap={true}>
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Anika_Gupta_Serious - Anika Gupta.png" name="Anika Gupta" description="Anika is a sophomore in Washington and has participated in math competitions since third grade, including Math Kangaroo and AMC. Anika is part of the Curriculum Development team for Mustang Math. She is passionate about teaching others and has experience tutoring students online. Outside of math, Anika enjoys reading, baking, and traveling." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Photo - Alexander Liu.jpg" name="Alex Liu" description="Alexander Liu is a high school sophomore in Massachusetts. He has participated in math competitions since elementary school, including getting 24th place in MA MATHCOUNTS state, and achieving DHR in the 2024 AMC10A and B. Outside of math, he enjoys reading, playing piano, playing badminton, playing video games, and playing ultimate. " right/>
    
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Yu-Hong_Wang_Serious - Yu-Hong Wang.png" name="Alexander Wang" description="Both a senior and a passionate student for the art of math, Alexander has challenged himself in various ways, whether it be joining university-held tournaments like Stanford Math Tournament or performing individual research and learning specific areas of interest, especially Combinatorics. While seeking to dive into intricate topics in combinatorics like extremal combinatorics, Alexander enjoys serving to students in tutoring (SAT, school math, competition problems) and as Mustang Math's New Jersey state lead, instructor, and curriculum development member." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Lalith_Durbhakula_Serious - Lalith Durbhakula.png" name="Lalith Durbhakula" description="Lalith is a sophomore in Washington. He has participated in math competitions since 7th grade, qualifying for AIME 2x and getting 6th place nationally in the Purple Comet Math Contest. At Mustang Math, Lalith is a member of the Curriculum Development and Problem Writing teams and is responsible for teaching students, improving handouts, and creating self-made problems. By utilizing his prior tutoring experience at the North South Foundation, Lalith ensures the highest quality teaching experience for any student. Apart from Mustang Math, Lalith enjoys playing virtually any ball sport, loves indoor games, and is fond of cooking." right/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Ihita_Gupta_Serious - Ihita Gupta.png" name="Ihita Gupta" description="Ihita is a high schooler from Washington, who is passionate about math and technology. She has participated in many math competitions including the AMC8, AMC10, MOEMS, MATHCOUNTS, and more. She also tutors students in her area online to help spark their love of math. She is part of Mustang Math's Curriculum Development team." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/IMG_3102 2-min - Varyan Jain.png" name="Varyan Jain" description="Varyan Jain is a sophomore in Arizona. He has participated in math contests such as USAMTS, MATHCOUNTS, SMT, and the AMC series for a long time now. He also has experience tutoring students in math both in person and online for his school's MATHCOUNTS team. At Mustang Math, Varyan is a member of the Curriculum Development team and Problem Writing team. Outside of math, he enjoys speedcubing, singing, swimming, and badminton." right/>
</FlexBox>
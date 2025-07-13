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
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Photo - Alexander Liu.jpg" name="Alexander Liu" description="Alexander Liu is a high school junior in Massachusetts. He has participated in math competitions since elementary school, including getting 24th place in MA MATHCOUNTS state, and achieving DHR in the 2024 AMC10A and B. Outside of math, he enjoys reading, playing piano, playing badminton, playing video games, and playing ultimate." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Margaret_Sikes_Serious - Margaret Sikes.png" name="Margaret Sikes" description="Margaret is a homeschooled high school junior in California. She began her competition math journey in middle school, and her favorite competition is USAMTS because of the unique competition structure and opportunity to research challenging problems. She has close to two years of experience in tutoring, and is a member of the Curriculum Development and Problem Writing Teams at Mustang Math. Margaret's hobbies include doing math, reading, writing, chess, and much more." right/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Anika_Gupta_Serious - Anika Gupta.png" name="Anika Gupta" description="Anika is a high school junior in Washington and has participated in math competitions since third grade, including Math Kangaroo and AMC. Anika is part of the Curriculum Development team for Mustang Math. She is passionate about teaching others and has experience tutoring students online. Outside of math, Anika enjoys reading, baking, and traveling." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/IMG_7776 - Girish Thillai Natarajan.jpeg" name="Girish Thillai Natarajan" description="Girish Thillai Natarajan is a high school junior in California. He has participated in math contests such as BMT, SMT, and the AMC series beginning in middle school. He has experience tutoring students in math both in person and online at many levels of difficulty. At Mustang Math, Girish is a member of the Curriculum Development team. Outside of math, he enjoys reading, programming, and playing video games." right/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Daniel_Swetman_Serious - Daniel Swetman.png" name="Daniel Swetman" description="Daniel is a high school junior in Washington. He has participated in various math competitions over the years such as MATHCOUNTS, AMC 8, and AMC 10. He is a part of the Problem Writing and Curriculum Development Team for Mustang Math, but also helps with teaching students in his school's math team. Apart from math, he enjoys drawing and playing video games." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Sara_Liu_Instructor.png" name="Sara Liu" description="Sara is a high school sophomore in Washington. She has participated in competitions such as the AMC series and AIME. She has tutored younger students in middle school, and she is also one of the leaders of her school's math club. Outside of math, she enjoys music, badminton, and birdwatching." right/>
</FlexBox>
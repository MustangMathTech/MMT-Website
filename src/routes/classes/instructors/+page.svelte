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

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://forms.gle/FuBEBckKQm3QDJUz5" button_text="	Class Registration! 	" id="registerBeginner"/>

<br><br>

<FlexBox wrap={true}>
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Alexander_Liu_Serious.png" name="Alex Liu" description="Alexander Liu is a high school sophomore in Massachusetts. He has participated in math competitions since elementary school, including getting 24th place in MA MATHCOUNTS state, and achieving DHR in the 2024 AMC10A and B. Outside of math, he enjoys reading, playing piano, playing badminton, playing video games, and playing ultimate. " left/>
    
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Anika_Gupta_Serious.png" name="Anika Gupta" description="Anika is a sophomore in Washington and has participated in math competitions since third grade, including Math Kangaroo and AMC. Anika is part of the Curriculum Development team for Mustang Math. She is passionate about teaching others and has experience tutoring students online. Outside of math, Anika enjoys reading, baking, and traveling." right/>
    
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Ava_Berenji_Serious.png" name="Ava Berenji" description="Ava Berenji is a freshman in California. She has been doing competitive math since elementary school, and her favorite subject is geometry. She is also a tutor and instructor at Mustang Math, but outside of math, she enjoys studying cryptography, programming, singing, and playing badminton." left/>
    
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Girish_Thillai_Serious.png" name="Girish Thillai" description="Girish Thillai Natarajan is a sophomore in California. He has participated in math contests such as BMT, SMT, and the AMC series beginning in middle school. He has experience tutoring students in math both in person and online at many levels of difficulty. At Mustang Math, Girish is a member of the Curriculum Development team. Outside of math, he enjoys reading, programming, and playing video games." right/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Lalith_Durbhakula_Serious.png" name="Lalith Durbhakula" description="Lalith is a sophomore in Washington. He has participated in math competitions since 7th grade, qualifying for AIME 2x and getting 6th place nationally in the Purple Comet Math Contest. At Mustang Math, Lalith is a member of the Curriculum Development and Problem Writing teams and is responsible for teaching students, improving handouts, and creating self-made problems. By utilizing his prior tutoring experience at the North South Foundation, Lalith ensures the highest quality teaching experience for any student. Apart from Mustang Math, Lalith enjoys playing virtually any ball sport, loves indoor games, and is fond of cooking." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Sohji_Matsuda_Serious.png" name="Sohji Matsuda" description="Sohji Matsuda is a senior in Missouri. He has participated in different math contests as well. He is an AIME qualifier and won 5th place individually at MathCON National contest. As a Mustang Math tutor and a captain of a school math club, he has experience in teaching advanced math material both online and in person. At Mustang Math, Sohji is a member of the Curriculum Development team and Problem Writing team. Outside of math, he enjoys playing the guitar, running, and cooking." right/>
</FlexBox>

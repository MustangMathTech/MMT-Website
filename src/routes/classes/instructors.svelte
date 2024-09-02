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

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://forms.gle/vWFaBj8Ubis9a2Vu5" button_text="	Class Registration! 	" id="registerBeginner"/>

<br><br>

<FlexBox wrap={true}>
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Anika_Gupta_Serious.png" name="Anika Gupta" description="Anika is a sophomore in Washington and has participated in math competitions since third grade, including Math Kangaroo and AMC. Anika is part of the Curriculum Development team for Mustang Math. She is passionate about teaching others and has experience tutoring students online. Outside of math, Anika enjoys reading, baking, and traveling." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Diya_Vatsavai_Serious.png" name="Diya Vatsavai" description="Diya Vatsavai is a junior at Valley Christian High School. She has been doing competitive math since third grade, ranking first nationally in Math Kangaroo and MOEMS with perfect scores. She also won a gold medal for her age group in RSM’s International Math Contest. More recently, she is a two-time AIME qualifier through AMC 10. Outside of math, she enjoys robotics, entrepreneurship, experimenting with AI, and tutoring to help people grow more confident with their academic abilities."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Emma_Liu_Serious.png" name="Emma Liu" description="Emma is a junior from Massachusetts. She has been participating in math contests since elementary school, with experience in competitions like Math Kangaroo, AMC 8, MATHCOUNTS, and AMC 10. She also has two years of experience TA-ing for her local Chinese school's AoPS math classes. At Mustang Math, she is a member of the Curriculum Development, Tournament Development, and Business and Engagement Teams.  In her free time, Emma likes to run, bake cookies, read, and do calligraphy." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Erica_Dong_Serious.png" name="Erica Dong" description="Erica is a sophomore from Southern California. She has participated in math contests since elementary school and has been enjoying competitive math ever since. Erica has qualified for AIME and received honor roll and distinction on the AMC 8 and AMC 10. She has also participated in CHMMC (now known sa CMM). Aside from Mustang Math, Erica is a coach and teacher for her local middle school's math league. In her free time, Erica enjoys going to various bubble tea shops, watching movies, and reading poetry." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Lalith_Durbhakula_Serious.png" name="Lalith Durbhakula" description="Lalith is a sophomore in Washington. He has participated in math competitions since 7th grade, qualifying for AIME 2x and getting 6th place nationally in the Purple Comet Math Contest. At Mustang Math, Lalith is a member of the Curriculum Development and Problem Writing teams and is responsible for teaching students, improving handouts, and creating self-made problems. By utilizing his prior tutoring experience at the North South Foundation, Lalith ensures the highest quality teaching experience for any student. Apart from Mustang Math, Lalith enjoys playing virtually any ball sport, loves indoor games, and is fond of cooking."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Margaret_Sikes_Serious.png" name="Margaret Sikes" description="Margaret is a homeschooled high school student in California. She began her competition math journey in middle school, and her favorite competition is USAMTS because of the unique competition structure and opportunity to research challenging problems. She has close to two years of experience in tutoring, and is a member of the Curriculum Development and Problem Writing Teams at Mustang Math. Margaret's hobbies include doing math, reading, writing, chess, and much more." left/>
</FlexBox>

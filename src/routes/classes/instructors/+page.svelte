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

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://link.mustangmath.com/ClassReg" button_text="Class Registration!" id="registerBeginner"/>

<br><br>

<FlexBox wrap={true}>
    <div id = "first"><InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Shaurya Mohapatra" description="Shaurya is a high-schooler in San Mateo, California. He began his competition math journey in middle school. His favorite competition is AMC 8 because of the widespread accessibility to the competition, and how awesome the memories made with his school team were. He has close to 3 to 4 years of experience in tutoring and coaching on and off, and is a proud member of the Curriculum Development team at Mustang Math. He has tutored 7th and 8th graders, high schoolers, and coached kids from a range of 7 to 10 years old. Finally, it should mentioned that he has a younger brother who is nine years old." left/></div>

    <div id = "second"><InfoPerson  width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Kavish Karia" description="Kavish is a high-school freshman in Novi, Michigan. He has been participating in his school's math teams since he was in elementary school. He has competed in a variety of math competitions including the AMC 8, MATHCOUNTS, Math Olympiad,  and Math Pentathlon, achieving Hall of Fame in Math Pentathlon. He has around 2 years of experience in tutoring the newcomers (6th and 7th graders) in his robotics team. He is also a member of the Curriculum Development team. Outside of math and school, he enjoys playing competitive tennis, robotics, programming, and playing video games." right/></div>

    <div id = "third"><InfoPerson  width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Anish Agrawal" description="Anish is a high-school freshman in Washington. He has been participating in competition math since elementary school, with his favorite competitions being AIME and USAMTS. He has been tutoring students in competition math for around 3 years, and recently started tutoring for SAT math. Anish is part of the Problem Writing and Curriculum Development team for Mustang Math, helping create and teach material. Outside of math, he enjoys robotics, tennis, chess, and playing the piano and violin." left/></div>

    <div id= "fourth"><InfoPerson  width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Margaret Sikes" description="Margaret is a homeschooled high school student in California. She began her competition math journey in middle school, and her favorite competition is USAMTS because of the unique competition structure and opportunity to research challenging problems. She has three years of experience in tutoring, and is a member of the Curriculum Development and Problem Writing Teams at Mustang Math. Margaret's hobbies include doing math, reading, writing, Antichess, and more." right/></div>

    <div id = "fifth"><InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Wenyuan Xi" description="Wenyuan is a high schoool student in California. He enjoys math competitions such as the AMC series and solving problems in general. Currently, he is part of the Curriculum Development and Problem Writing team in Mustang Math. His favorite math subject is counting and probability. Outside of math, Wenyuan likes running, playing video games, and reading." left/></div>

    <div id = "sixth"><InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Wenbo Xi" description="Wenbo is a high school sophomore in California. He began participating in math contests in elementary school and his current favorite math subject is geometry. Wenbo is a member of the Tournament Development, Curriculum Development, and Problem Writing team. Besides math, he enjoys running, coding, and video games." right/></div>

    <div id = "seventh"><InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Avi Batra" description="Avi is a high schooler from Fremont, California. He's been participating in math competitions since 2nd grade, and his favorite math series is the AMC. He is currently a part of the Curriculum Development and Tournament Development teams. Outside of math, he likes to read about biology and play golf." left/></div>

    <div id = "eighth"><InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Person_filler_icon.png" name="Ekaansh Agrawal" description="Ekaansh is a high school senior in Washington. He has participated in several math competitions such as Math Kangaroo, AMC 10, AMC 12, and AIME. He is passionate about teaching and helps teach elementary students with his school's math club. Outside of math, he enjoys watching sports, running track, and playing video games." right/></div>
</FlexBox>

<style>

    #first {
        display: flex;
        justify-content: center;
        animation: moveRight 5s;
    }

    #second {
        display: flex;
        justify-content: center;
        animation: moveLeft 5s;
    }

    #third {
        display: flex;
        justify-content: center;
        animation: moveRight 5s;
    }  

    #fourth {
        display: flex;
        justify-content: center;
        animation: moveLeft 5s;
    } 

    #fifth {
        display: flex;
        justify-content: center;
        animation: moveRight 5s;
    } 

    #sixth {
        display: flex;
        justify-content: center;
        animation: moveLeft 5s;
    } 

    #seventh {
        display: flex;
        justify-content: center;
        animation: moveRight 5s;
    } 

    #eighth {
        display: flex;
        justify-content: center;
        animation: moveLeft 5s;
    } 

    @keyframes moveRight{
       from {
        transform: translate(50em)
       }
    }

    @keyframes moveLeft {
        from {
            transform: translate(-50em)
        }
    }
</style>
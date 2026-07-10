<script>
    import Heading from "$lib/components/Heading.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import {lazyLoad} from '$lib/lazyload.js';
</script>

<svelte:head>
    <title>Mustang Math</title>
</svelte:head>

<PageHeader
    title="Mustang Math"
    button_url="/join"
    button_text="Applications for MM 2026-2027 now open!"
    button_id="signupformmt"
    button_icon="arrow"
    use_image_arrow={true}
/>

<!-- <div> 
<Heading text="Mission Statement" size={6} textColor="#1B9AAA" />
</div>

<div style="height:10vh"></div>


<div style="margin-left: 15vw; margin-right: 15vw;">
    <PanelBoxAnimated style="">
        <div class="MissionStatement">
            Lorem ipsum dolor sit amet Consectetuer adipiscing elit, Sed diam
            nonummy Nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
        </div>
    </PanelBoxAnimated>
</div>

<div style="height:10vh"></div>


    <div>
        <Heading text="Statistics" size={5} textColor="#1B9AAA" />
    </div>

    <div style="height:10vh"></div>


<div style="display:flex" >
    <div>
        <PanelBox margin="3%">
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;" >
                <Heading text="1200+ Competitors" size={3} textColor="#516370;" />
                <img
                    src="home-page/People.png"
                    alt="people clip art"
                    style="width:100%; margin-top:30px;"
                />
            </div>
        </PanelBox>
    </div>


    <div>
        <PanelBox margin="3%">
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center; padding:20px;" >
                <Heading text="12 Countries" size={3} textColor="#516370;" />
                <img
                    src="home-page/Earth.png"
                    alt="Earth clip art"
                    style="width:60%; margin-top:30px;"
                />
            </div>
        </PanelBox>
    </div>
</div> -->
<div style="background: #b9c6d2; width:100%; display:flex; align-items:center; flex-direction:column; justify-content:center;">
    <!-- <Horse></Horse> -->
    <div class="vertLine"></div>
    <div class="dot"> </div>

    <div style="width:100%; align-items:center;display:flex; flex-direction:column; justify-content:center;" >
        <Heading text="About Mustang Math" size={4} textColor="#3C6F8B;" />
        <div class="homeText">
           Mustang Math is a <b>nonprofit organization</b> of over 200 high school and college volunteers who are dedicated towards providing middle schoolers access to <b>challenging, fun, and collaborative</b> math competitions and resources! 
<br>
<br>
Our key projects include our annual team-based Mustang Math Tournament, free seminars and high-quality classes, mock AMCs, merch, custom tournament platform, and more! 
<br>
<br>
We reached over <b>1500 U.S. and international competitors</b> in our 2025 contests, and are excited to continue our mission of spreading a love for mathematics amongst students.
        </div>
    </div>  

    <div class="vertLine"></div>
    <div class="dot"> </div>



    <Heading text="Who are We?" size={4} textColor="#3C6F8B;" />


<embed src="/home-page/recap.pdf" width="800px" height="2100px" />
    

<div class="homeBox">
        <div class="homeCard">


        <div id="volunteers">
        <img
        use:lazyLoad
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        data-src="/home-page/Volunteers.png"
        style="width: 216px; height: 210px; flex-shrink: 0;"
        alt="Volunteers"
        />

        </div>
            <Heading text="200+" size={4} textColor="#38C27C;" />
            <Heading text="Volunteers" size={2} textColor="#000;" />
        </div>

        <div class="homeCard">
            <div id = "states">
            <img
            use:lazyLoad 
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" 
            data-src = "/home-page/States.png"
            style="width: 216px;
            height: 216px;
            flex-shrink: 0;"
            alt="States with Volunteers"
            />
            </div>
            <Heading text="34" size={4} textColor="#38C27C;" />
            <Heading text="States with Volunteers" size={2} textColor="#000;" />
        </div>

        <div class="homeCard">
            <div id = "teams">
            <img
            use:lazyLoad
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            data-src = "/home-page/Teams.png"
            style="width: 216px;
            height: 216px;
            flex-shrink: 0;"
            alt="Teams"
            
            />
            </div>
            <Heading text="6" size={4} textColor="#38C27C;" />
            <Heading text="Teams" size={2} textColor="#000;" />
        </div>
    </div>
    

    <div class="homeText">
        Mustang Math began with a small team of dedicated volunteers in 2020, who wanted to spread their love for mathematics to their community. 
<br>
<br>
Now, MM has a full team of volunteers worldwide, consisting of 6 dedicated teams overseeing several projects, all working towards the shared goal of promoting mathematics. 
<br>
<br>
Alongside our projects, MM has contributed to other mathematical initiatives, such as creating tests for the ASDAN Math Tournament and Math Kangaroo Asia Camp. 
<br>
<br>
Internationally, Mustang Math is partnered with SIMCC as its exclusive global partner outside of the USA. With a strong presence in over 54 countries through SIMCC’s network of dedicated council partners, SIMCC is committed to making MMT accessible to students worldwide. To learn more, please visit <a href="https://www.simcconline.org/mmt/">https://www.simcconline.org/mmt/</a>. 

    </div>

    <div class="vertLine"></div>
    <div class="dot"> </div>


    

    <Heading text="Classes" size={4} textColor="#3C6F8B;" />

    <div class="homeText">
        <strong>Mustang Math Classes</strong> focus on <strong>competition math</strong> and are split into 4 quarters: Algebra, Geometry, Combinatorics/Number Theory, and Problem Solving. Our current <a href="/classes#classDetails"><strong>Discrete term</strong></a> runs for <strong>10 weeks</strong>, with one session per week. Each session is a 90-minute Zoom class with 5–15 students and 2 instructors.    </div>

    <div class="homeText">
        The total cost for the 10 sessions is <strong>$100</strong>. Financial aid is available upon request. As a nonprofit, we charge for our classes to fund our tournaments while promoting student commitment.
    </div>

</div>

<style>
    #volunteers {
        animation: scaleUp 5s ease;
        animation-iteration-count: infinite;
    }

    #states {
        animation: scaleUp 5s ease;
        animation-iteration-count: infinite;
    }

    #teams {
        animation: scaleUp 5s ease;
        animation-iteration-count: infinite;
    }

    @keyframes scaleUp {
        to {
            transform: scale(1.55);
        }
    }

    .vertLine {
        width: 1px;
        height: 153px;
        background: #000;
        padding: 0px;
    }

    .homeText {
        width: 80%;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: Ubuntu;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 3%;
        margin-top: 3%;
    }

    .homeBox {
        display: flex;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 3%;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 950px) {
        .homeBox {
            display: flex;
            flex-direction: column;
            margin-left: 10%;
            margin-right: 10%;
            margin-top: 3%;
            align-items: center;
            justify-content: center;
        }
    }

    .homeCard {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-left: 5%;
        margin-right: 5%;
    }

    .dot {
        border-radius: 10000px;
        border-color: #000;
        border-width: 10px;
        border-style: solid;
    }
</style>

<script>
    import { onMount, afterUpdate } from 'svelte';
	import { time_ranges_to_array } from 'svelte/internal';
	import Section from './Section.svelte';
  
    let sections = []; // Array to store section details
    let expanded = false; // Boolean to track sidebar expansion
    let currentSection; // Variable to store current section ID
  
    // Function to toggle sidebar expansion
    function toggleSidebar() {
      expanded = !expanded;
      const dis = document.getElementById("navigation");
        dis.textContent = "";
      hidenav();
    }
  
    // Function to scroll to a section
    function scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Function to update current section based on scroll position
    function updateCurrentSection() {
      const scrollPosition = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          // Set current section
          currentSection = sections[i].id;
          break;
        }
      }
    }
  


    function hidenav(){
      const dis = document.getElementById("navigation");
      if(document.getElementById("sidebar").style.left == "-110px"){
        console.log("outside");
      }
      if(!expanded){
      }else{
        dis.textContent = "";
      }
    }

    onMount(() => {
      updateSectionsArray();
      // Listen for scroll events to update current section
      window.addEventListener('scroll', updateCurrentSection);
      window.addEventListener('scroll', hidenav);

      
      // Initial calculation of current section
      updateCurrentSection();
  
      // Cleanup scroll event listener on component destroy
      return () => {
       window.removeEventListener('scroll', updateCurrentSection);
       window.removeEventListener('scroll', hidenav);
      };
    });
  
    // Update sections array after DOM updates
    afterUpdate(() => {
      updateSectionsArray();
    });
  
    // Function to update the sections array
    export function updateSectionsArray() {
      sections = Array.from(document.querySelectorAll('section')).map(section => ({
        id: section.id,
        offsetTop: section.offsetTop
      }));
    }

    function navhide(){
      const dis = document.getElementById("navigation");
      dis.textContent = "";
    }


    $:console.log(sections);
    $:navhide;
    $:console.log(currentSection);

  </script>
  
  <style>
    .sidebar {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left: -110px; /* Initially hide the sidebar */
      background-color: rgba(255,255,255,0.5);
      border: 1px solid #ccc;
      padding: 10px;
      transition: right 0.3s ease;
      width:100px;
      border-radius: 25px;
      z-index: 10000;
    }
  
    .sidebar:hover {
      left: 0; /* Show the sidebar on hover */
    }
  
    .section-link {
      display: block;
      margin-bottom: 5px;
      cursor: pointer;
      border-color: gainsboro;
      border-style: solid;
      border-width: 0px 0px 1px 0px;
      padding-bottom: 5px;
    }

    .navigation{
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left:-20px;
      transform: rotate(90deg);
      background-color: rgba(256,256,256, 0.4);
      padding: 5px;
      border-radius: 10px;
    }


  </style>
  <div>
    <div id="navigation" class="navigation" on:mouseenter={navhide}>Page Navigation</div>

  <div class="sidebar" id="sidebar" on:mouseleave={toggleSidebar}
  on:focus:mouseover={() => navhide}
  >
    {#if expanded}
      {#each sections as section}
        {#if section.id == currentSection}
        <div class="section-link" on:click={() => scrollToSection(section.id)}>
          <b>{section.id}</b>
        </div>
        {:else}
        <div class="section-link" on:click={() => scrollToSection(section.id)}>
          {section.id}
        </div>
        {/if}
      {/each}
    {:else}
      <div class="section-link" 
      on:load={() => scrollToSection(currentSection)}
      on:click={() => scrollToSection(currentSection)}
      >
        {currentSection}
      </div>
    {/if}
  </div>
</div>
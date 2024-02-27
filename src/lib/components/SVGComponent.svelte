<!-- SVGComponent.svelte -->
<script>
    import { v4 as uuid } from '@lukeed/uuid';
    export let svgURL = ''; // SVG URL
    export let fill = 'black'; // Default fill color
    export let hoverFill = 'green'; // Fill color on hover
    export let rotationAngle = Math.random()*6 - 3; // Initial rotation angle
    export let rotationOnHover = Math.random() * 2 - 1 > 0 ? 2+Math.random()*3 : -2-Math.random()*3; // Rotation angle on hover
    export let initialWidth = '250px'; // Initial width of the SVG
    export let id = uuid(); // Unique identifier for the component

    export let clicked = false;

    console.log(svgURL, clicked)
  
    import { onMount } from "svelte";
    import { afterUpdate } from 'svelte';
  
    let svgSource = ''; // SVG source string
  
    // Fetch SVG content from the URL
    async function fetchSVG() {
      try {
        const response = await fetch(svgURL);
        svgSource = await response.text();
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    }
  
    // Update fill color of SVG elements with transition
    function setRestingFill() {
      const parser = new DOMParser();
      const svgContainer = document.querySelector(`#svg-container-${id}`);
      const svgElements = svgContainer.querySelectorAll('svg *');
      svgElements.forEach(element => {
        element.setAttribute('fill', fill);
      });
      svgContainer.style.transform = `scale(1) rotate(${rotationAngle}deg)`; // Reset scale and rotation on mouse leave
      svgContainer.style.animation = 'none'; // Remove shake animation
    }

    function setActiveFill() {
      const svgContainer = document.querySelector(`#svg-container-${id}`);
      const svgElements = svgContainer.querySelectorAll('svg *');
      svgElements.forEach(element => {
        element.setAttribute('fill', hoverFill);
      });
      svgContainer.style.transform = `scale(1.1) rotate(${rotationAngle + rotationOnHover}deg)`; // Scale up and rotate on hover
    }
  
    // Add hover effect to all SVG elements
    function addHoverEffect() {
      const svgContainer = document.querySelector(`#svg-container-${id}`);
      if (svgContainer) {
        svgContainer.addEventListener('mouseenter', () => {
          if (!clicked) {
            setActiveFill();
          }
        });
        svgContainer.addEventListener('mouseleave', () => {
          if (!clicked) {
            setRestingFill();
          }
        });
        svgContainer.addEventListener('click', () => {
          const newClicked = !clicked
          clicked = newClicked; // Toggle clicked state
          console.log(clicked)
        });
      }
    }
  
    // Fetch SVG content when the component mounts
    onMount(async () => {
      await fetchSVG();
      if (!clicked) {
        setRestingFill();
      } else {
        setActiveFill();
      }
      addHoverEffect();
    });

    afterUpdate(async () => {
      if (!clicked) {
        setRestingFill();
      } else {
        setActiveFill();
      }
    })
  
</script>
  
<style>
    .svg-container {
      transition: transform 0.2s ease-in-out; /* Smooth transition for scale change */
    }
</style>
  
<div id={`svg-container-${id}`} class="svg-container" style="transform: rotate({rotationAngle}deg); width: {initialWidth};">
    {@html svgSource}
</div>

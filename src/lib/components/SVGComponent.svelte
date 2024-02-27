<!-- SVGComponent.svelte -->
<script>
    import { v4 as uuid } from '@lukeed/uuid';
    export let svgURL = ''; // SVG URL
    export let fill = 'black'; // Default fill color
    export let hoverFill = 'green'; // Fill color on hover
    export let rotationAngle = Math.random()*6 - 3; // Initial rotation angle
    export let rotationOnHover = Math.random()*10 - 5; // Rotation angle on hover
    export let initialWidth = '30vw'; // Initial width of the SVG
    export let id = uuid(); // Unique identifier for the component

    export let clicked = false;

    console.log(id)
  
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
    function updateFill() {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgSource, 'image/svg+xml');
      const svgElements = svgDoc.querySelectorAll('*');
      svgElements.forEach(element => {
        element.style.transition = 'fill 0.1s ease-in-out'; // Add transition for fill
        element.setAttribute('fill', fill);
      });
      svgSource = new XMLSerializer().serializeToString(svgDoc);
    }
  
    // Add hover effect to all SVG elements
    function addHoverEffect() {
      const svgContainer = document.querySelector(`#svg-container-${id}`);
      if (svgContainer) {
        if (clicked) {
          const svgElements = svgContainer.querySelectorAll('svg *');
          svgElements.forEach(element => {
            element.setAttribute('fill', hoverFill);
          });
          svgContainer.style.transform = `scale(1.1) rotate(${rotationOnHover}deg)`; // Scale up and rotate on hover
        } else {
            svgContainer.addEventListener('mouseenter', () => {
            if (!clicked) {
              const svgElements = svgContainer.querySelectorAll('svg *');
              svgElements.forEach(element => {
                element.setAttribute('fill', hoverFill);
              });
              svgContainer.style.transform = `scale(1.1) rotate(${rotationOnHover}deg)`; // Scale up and rotate on hover
            }
          });
          svgContainer.addEventListener('mouseleave', () => {
            if (!clicked) {
              const svgElements = svgContainer.querySelectorAll('svg *');
              svgElements.forEach(element => {
                element.setAttribute('fill', fill);
              });
              svgContainer.style.transform = `scale(1) rotate(${rotationAngle}deg)`; // Reset scale and rotation on mouse leave
              svgContainer.style.animation = 'none'; // Remove shake animation
            }
          });
        }
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
      updateFill();
      addHoverEffect();
    });
  
</script>
  
<style>
    .svg-container {
      transition: transform 0.2s ease-in-out; /* Smooth transition for scale change */
    }
</style>
  
<div id={`svg-container-${id}`} class="svg-container" style="transform: rotate({rotationAngle}deg); width: {initialWidth};">
    {@html svgSource}
</div>

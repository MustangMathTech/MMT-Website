<script>
  /**
   * @type {string[]}
   * An array of image URLs to display in the slideshow.
   */
  export let images = [];

  let currentIndex = 0; // Tracks the currently visible image index

  // Function to show the next image
  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Function to show the previous image
  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
</script>

<div class="slideshow-container">
  {#each images as image, i}
    <div class="slide" class:visible={i === currentIndex}>
      <img src={image} alt="Slide {i + 1}" />
    </div>
  {/each}

  <button class="prev" on:click={prev}>&#10094;</button>
  <button class="next" on:click={next}>&#10095;</button>
</div>

<style>
  .slideshow-container {
    position: relative;
    max-width: 800px;
    margin: auto;
    overflow: hidden; /* Hides parts of the image that might overflow */
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .slide {
    display: none; /* Hide all slides by default */
  }

  .slide.visible {
    display: block; /* Show only the active slide */
    animation: fadeIn 0.5s ease-in-out;
  }

  .slide img {
    width: 100%;
    vertical-align: middle; /* Removes bottom space under the image */
  }

  /* Navigation button styles */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    user-select: none; /* Prevents text selection on double-click */
    transition: background-color 0.3s ease;
  }

  .prev {
    left: 0;
    border-radius: 0 3px 3px 0;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  /* Simple fade-in animation */
  @keyframes fadeIn {
    from { opacity: 0.4; }
    to { opacity: 1; }
  }
</style>

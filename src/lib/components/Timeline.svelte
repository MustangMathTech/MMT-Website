<script>
	export let events = [];
	export let links = [];
	export let blurb =
		"Mustang Math is a nonprofit led by high school and college volunteers, offering middle schoolers engaging math competitions and resources. We organize the annual Mustang Math Tournament, provide affordable tutoring, and are expanding with new projects like a YouTube channel and competition management platform. In 2024, we reached nearly 600 U.S. competitors and expect 1,000 more in our upcoming international tournament. We're growing our team to inspire more students to love math!"; // Blurb text to display at the top
</script>

<div class="blurb-container">
	<div class="blurb">
		<p>{blurb}</p>
	</div>
</div>

<div class="timeline-container">
	<div class="link-container">
		{#each links as link}
			<div class="link-box">
				<h3>{link.title}</h3>
				<p>{link.description}</p>
				{#if link.url}
					<a href={link.url} target="_blank">Learn More</a>
				{/if}
			</div>
		{/each}
	</div>

	<div class="timeline">
		{#each events as event, index}
			<div class="event-container {index % 2 === 0 ? 'left' : 'right'}">
				<div class="content">
					<h3>{event.name}</h3>
					<p><strong>Date:</strong> {event.date}</p>
					<p>{event.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.blurb-container {
		width: 80%;
		text-align: center;
		margin-bottom: 20px;
		margin-left: 10%;
		margin-top: 20px;
		padding: 50px;
		background-color: white;
		border-radius: 6px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.blurb p {
		margin: 0;
		font-size: 1.2em;
		color: #333;
	}

	.timeline-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		box-sizing: border-box;
	}

	.timeline {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		margin-left: 25%;
		padding: 10px 0;
		width: 80%;
	}

	.link-container {
		width: 35%;
		padding: 0px;
		box-sizing: border-box;
		margin-top: 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.link-box {
		margin-bottom: 20px;
		padding: 15px;
		margin-right: -5%;
		width: 200%;
		background-color: #f9f9f9;
		border-radius: 6px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.timeline::after {
		content: "";
		position: absolute;
		width: 6px;
		background-color: #ccc;
		top: 0;
		bottom: 0;
		left: 59.25%;
		margin-left: -3px;
	}

	.event-container {
		padding: 20px;
		position: relative;
		background-color: inherit;
		width: 50%;
	}

	.event-container.left {
		left: 2.5%;
	}

	.event-container.right {
		left: 59.25%;
	}

	.event-container::after {
		content: "";
		position: absolute;
		width: 25px;
		height: 25px;
		right: -17px;
		background-color: white;
		border: 4px solid #106c74;
		top: 15px;
		border-radius: 50%;
		z-index: 1;
	}

	.right::after {
		left: -16px;
	}

	.content {
		padding: 20px;
		background-color: white;
		position: relative;
		border-radius: 6px;
	}
</style>

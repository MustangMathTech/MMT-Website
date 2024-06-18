<script>
	export let mainText;
    export let iconName;

	const colorList = {
		"community-engagement": "#d8c87e",
		"curriculum-development": "#9bd87e",
		"design": "#7ed8af",
		"problem-writing": "#7eb5d8",
		"technology": "#957ed8",
		"tournament-development": "#d87ece",
		"video-production": "#d87e80"
	};
</script>

<div>
	<div style="padding: 20px" class="flex">
		<div class="panel-box">
			<div class="flip-card">
				<div class="card-side-inner">
					<div class="card-side-front person-details" style="border-color: {colorList[iconName.split(" ")[1]]};">
						<div class="center-content">
							<i class="fa-solid icon {iconName}" />
                            <h1 style="font-size: 1.5em; color: #000; font-weight: 800;">{mainText}</h1>
						</div>
					</div>
					<div class="card-side-back person-details" style="border-color: {colorList[iconName.split(" ")[1]]};">
						<div class="center-content">
							<slot />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.flip-card {
		background-color: transparent;
		width: 350px;
		height: 350px;
		perspective: 1000px;
	}

	.center-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

    i {
        font-size: 30px;
    }
</style>

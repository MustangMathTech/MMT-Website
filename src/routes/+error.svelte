<script>
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader title="Error: {$page.status}" description="{$page.error.message}" button_url="/" button_text= "Come back to charted territory!" button_id="homeButton"/>
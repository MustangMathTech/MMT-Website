<script>
import { onMount } from 'svelte';

export function setBackground(background) {
  onMount(() => {
    let current = document.body.style['background-image'];
    document.body.style['background-image'] = `url('${background}')`;
    return () => document.body.style['background-image'] = current;
  });
}
</script>
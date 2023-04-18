<script lang="ts">
	import '$/app.css';
	import NavigationBar from '$/lib/components/navbar/NavigationBar.svelte';
	import Alerts from '$components/Alerts.svelte';
</script>

<Alerts />

<NavigationBar />

<slot />

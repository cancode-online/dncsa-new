<script lang="ts">
	import { alerts, alert } from '$stores/alerts';
	import type { Alert } from '../../app';

	import { browser } from '$app/environment';

	let _alerts: Alert[] = [];

	alerts.subscribe((data) => {
		_alerts = data;
	});

	// Connection detection and alert system
	let online = true;
	let connectionTimeoutBuffer = 3000;
	let lastOnlineStatus = true;
	let offlineTimeout: NodeJS.Timeout;
	let onlineTimeout: NodeJS.Timeout;

	if (browser) {
		window.addEventListener('online', () => {
			if (online) return;

			online = true;

			onlineTimeout = setTimeout(() => {
				if (!lastOnlineStatus) alert('Internet connection restablished', 'success');
				lastOnlineStatus = true;
			}, connectionTimeoutBuffer);

			clearTimeout(offlineTimeout);
		});

		window.addEventListener('offline', () => {
			if (!online) return;

			online = false;

			offlineTimeout = setTimeout(() => {
				if (lastOnlineStatus) alert('No internet connection detected', 'error');
				lastOnlineStatus = false;
			}, connectionTimeoutBuffer);

			clearTimeout(onlineTimeout);
		});
	}
</script>

<div class="toast toast-bottom z-20">
	{#each _alerts as alert}
		<div class="alert {'alert-' + alert.type} shadow-lg alert-animation">
			<div class="flex justify-center w-fit">
				{#if alert.type === 'success'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				{:else if alert.type === 'warning'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					>
				{:else if alert.type === 'error'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				{:else if alert.type === 'info'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="stroke-current flex-shrink-0 w-6 h-6"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
				{/if}
				<span class="flex self-center w-fit">{alert.message}</span>
			</div>
		</div>
	{/each}
</div>

<style>
	.stroke-attr {
		stroke: 'blue';
		position: relative;
		left: 90px;
	}

	.alert-animation {
		animation: animate 4000ms ease-in-out forwards;
		opacity: 0;
	}

	@keyframes animate {
		0% {
			opacity: 0;
		}

		5% {
			opacity: 1;
		}

		80% {
			opacity: 1;
		}

		90% {
			opacity: 0;
		}

		100% {
			opacity: 0;
		}
	}
</style>

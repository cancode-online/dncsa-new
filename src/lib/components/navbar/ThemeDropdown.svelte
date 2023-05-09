<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	// Utilities
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	let popupSettings: PopupSettings = {
		// Set the event as: click | hover | hover-click | focus | focus-click
		event: 'click',
		// Provide a matching 'data-popup' value.
		target: 'theme'
	};

	// Stores
	import { storeTheme } from '$stores/stores';

	const themes = [
		{ type: 'skeleton', name: 'Skeleton', icon: '💀' },
		{ type: 'modern', name: 'Modern', icon: '🤖' },
		{ type: 'rocket', name: 'Rocket', icon: '🚀' },
		{ type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
		{ type: 'vintage', name: 'Vintage', icon: '📺' },
		{ type: 'sahara', name: 'Sahara', icon: '🏜️' },
		{ type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
		{ type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
		{ type: 'crimson', name: 'Crimson', icon: '⭕' }
		// { type: 'seasonal', name: 'Seasonal', icon: '🎆' }
		// { type: 'test', name: 'Test', icon: '🚧' },
	];

	const setTheme: SubmitFunction = () => {
		return async ({ result, update }) => {
			await update();
			if (result.type === 'success') {
				const theme = result.data?.theme as string;
				storeTheme.set(theme);
			}
		};
	};
</script>

<LightSwitch />
<!-- Theme -->
<div>
	<!-- trigger -->
	<button class="btn hover:variant-soft-primary" use:popup={popupSettings}>
		<i class="fa-solid fa-palette text-lg md:!hidden" />
		<span class="hidden md:inline-block">Layout</span>
		<i class="fa-solid fa-caret-down opacity-50" />
	</button>

	<!-- popup -->
	<div class="card p-4 w-60 shadow-xl" data-popup="theme">
		<div class="space-y-4">
			<nav class="list-nav p-4 -m-4 max-h-64 lg:max-h-[500px] overflow-y-auto">
				<form action="/?/setTheme" method="POST" use:enhance={setTheme}>
					<ul>
						{#each themes as { icon, name, type }}
							<li>
								<button
									class="option w-full h-full"
									type="submit"
									name="theme"
									value={type}
									class:bg-primary-active-token={$storeTheme === type}
								>
									<span>{icon}</span>
									<span>{name}</span>
								</button>
							</li>
						{/each}
					</ul>
				</form>
			</nav>
		</div>
		<div class="arrow bg-surface-100-800-token" />
	</div>
</div>

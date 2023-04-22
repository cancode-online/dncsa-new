<script lang="ts">
	import { layoutTheme } from '$stores/theme';

	const setTheme = (theme: string) => () => {
		document.documentElement.setAttribute('data-theme', theme);
		layoutTheme.set(theme);
	};
</script>

<div title="Change Theme" class="dropdown dropdown-end">
	<div tabindex="0" class="btn gap-1 normal-case btn-ghost">
		<svg
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewbox="0 0 24 24"
			class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			/></svg
		>
		<button class="btn btn-ghost p-0 hover:bg-transparent hidden md:inline uppercase">Layout</button
		>
		<svg
			width="12px"
			height="12px"
			class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewbox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
		>
	</div>
	<div
		class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
	>
		<div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
			<button
				on:click={setTheme('light')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="light"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="light"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">light</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('dark')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="dark"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="dark"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">dark</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('cupcake')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="cupcake"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="cupcake"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">cupcake</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('bumblebee')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="bumblebee"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="bumblebee"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">bumblebee</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('emerald')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="emerald"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="emerald"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">emerald</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('corporate')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="corporate"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="corporate"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">corporate</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('synthwave')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="synthwave"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="synthwave"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">synthwave</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('retro')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="retro"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="retro"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">retro</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('cyberpunk')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="cyberpunk"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="cyberpunk"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">cyberpunk</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('valentine')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="valentine"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="valentine"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">valentine</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('halloween')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="halloween"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="halloween"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">halloween</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('garden')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="garden"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="garden"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">garden</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('forest')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="forest"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="forest"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">forest</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('aqua')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="aqua"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="aqua"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">aqua</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('lofi')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="lofi"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="lofi"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">lofi</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('pastel')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="pastel"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="pastel"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">pastel</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('fantasy')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="fantasy"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="fantasy"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">fantasy</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('wireframe')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="wireframe"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="wireframe"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">wireframe</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('black')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="black"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="black"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">black</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('luxury')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="luxury"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="luxury"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">luxury</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('dracula')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="dracula"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="dracula"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">dracula</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('cmyk')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="cmyk"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="cmyk"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">cmyk</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('autumn')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="autumn"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="autumn"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">autumn</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('business')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="business"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="business"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">business</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('acid')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="acid"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="acid"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">acid</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('lemonade')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="lemonade"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="lemonade"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">lemonade</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('night')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="night"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="night"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">night</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('coffee')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="coffee"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="coffee"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">coffee</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button><button
				on:click={setTheme('winter')}
				class="outline-base-content overflow-hidden rounded-lg text-left"
				data-set-theme="winter"
				data-act-class="[&_svg]:visible"
				><div
					data-theme="winter"
					class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
				>
					<div class="grid grid-cols-5 grid-rows-3">
						<div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewbox="0 0 24 24"
								fill="currentColor"
								class="w-3 h-3 invisible"
								><path
									d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
								/></svg
							>
							<div class="flex-grow text-sm font-bold">winter</div>
							<div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
								<div class="bg-primary w-2 rounded" />
								<div class="bg-secondary w-2 rounded" />
								<div class="bg-accent w-2 rounded" />
								<div class="bg-neutral w-2 rounded" />
							</div>
						</div>
					</div>
				</div>
			</button>
		</div>
	</div>
</div>

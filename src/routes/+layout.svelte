<script lang="ts">
	import "../app.css";
	import NavigationBar from "$components/navbar/NavigationBar.svelte";
	import Loading from "$components/Loading.svelte";
	import { authenticated } from "$firebase";
	import { fly } from "svelte/transition";
	import Dashboard from "./Dashboard.svelte";
	import AuthForm from "$/lib/components/AuthForm.svelte";
	import VerifyPopup from "$/lib/components/VerifyPopup.svelte";
	import { fade } from "svelte/transition";
  
	let _authenticated = false;
	let _loading = true;
  
	authenticated.subscribe((state) => {
	  _authenticated = state || false;
	});
  
	setTimeout(() => {
	  _loading = false;
	}, 500); // ms


  </script>
  
  <div class="transition-container w-full h-full">
	{#if _loading}
	<Loading />
	{:else}
	<div
	  in:fly={{
		x: 0,
		y: -100,
		duration: 1000,
		delay: 100,
	  }}
	>
	  <NavigationBar />
	</div>
	{#if _authenticated}
	<Dashboard>
	  <slot />
	</Dashboard>
	{:else}
	<div class="bg-blue-500 w-full h-screen flex justify-center">
	  <AuthForm />
	</div>
	{/if}
	{/if}

	{#if _authenticated}
		<VerifyPopup/>
	{/if}
	
  </div>

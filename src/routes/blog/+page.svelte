<script>
	/** @type {import('./$types').PageData} */
	import { posts } from '$lib/stores/HiveStore.js';
	import Teaser from '$lib/components/Teaser.svelte';
	import Loading from '$lib/components/Loading.svelte';
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

<h1>Recent Posts</h1>
{#await $posts}
	<Loading />
{:then $posts}
	{#each $posts as art}
		<Teaser {art} />
	{/each}
{/await}

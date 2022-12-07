<script>
	/** @type {import('./$types').PageData} */
	export let tags;
</script>

<ul>
	{#each tags as tag}
		<li>{tag}</li>
	{/each}
</ul>

<style>
	ul {
		display: inline;
		margin-left: -18px;
	}
	ul li {
		display: inline-flex;
		border-radius: 4px;
		background-color: var(--secondary);
		margin: 4px;
		padding: 3px 6px 3px 6px;
	}
</style>

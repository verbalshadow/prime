<script>
	export let art;
	import Tags from './Tags.svelte';
	import Top from './Top.svelte';
</script>

<article>
	<Top
		title={art.title}
		description={art.json_metadata.description}
		author={art.author}
		permlink={art.permlink}
	/>
	<Tags tags={art.json_metadata.tags} />
</article>

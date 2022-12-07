<script>
	/** @type {import('./$types').PageData} */
	import MdView from './MdView.svelte';
	export let comment;
	let date = new Date(comment.created);
</script>

<article>
	<div class="datebox">
		<h3>{comment.author}</h3>
		<div>
			<p>{date}</p>
		</div>
	</div>
	<MdView markdown={comment.body} />
</article>

<style>
	.datebox {
		display: grid;
		grid-template-columns: minmax(150px, 25%) 1fr;
	}
</style>

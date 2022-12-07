<script>
	/** @type {import('./$types').PageData} */
	import { marked } from 'marked';
	export let markdown;

	let body = marked.parse(markdown);
</script>

<div>
	{@html body}
</div>

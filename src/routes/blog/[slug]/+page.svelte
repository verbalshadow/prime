<script>
  /** @type {import('./$types').PageData} */
	import MdView from '$lib/components/MdView.svelte';
  import Tags from '$lib/components/Tags.svelte';
	import Top from '$lib/components/Top.svelte';
	// import Voting from '$lib/components/Voting.svelte';
  export let data;
</script>

<article id="article">
  <header>
    <Top title={data.title} description={data.json_metadata.description} author={data.author} permlink={data.permlink} />
    <Tags tags={data.json_metadata.tags} />
  </header>
  <MdView markdown={data.body} />
  <footer><small>rawr</small></footer>
 </article>
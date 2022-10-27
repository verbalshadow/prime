<script>
  /** @type {import('./$types').PageData} */
	import MdView from '$lib/components/MdView.svelte';
  import Tags from '$lib/components/Tags.svelte';
	import Top from '$lib/components/Top.svelte';
  import Comments from '$lib/components/Comments.svelte';
	// import Voting from '$lib/components/Voting.svelte';

  export let data;
</script>

{#if data}
<article id="article">
  <header>
    <Top title={data.post.title} description={data.post.json_metadata.description} author={data.post.author} permlink={data.post.permlink} />
    <Tags tags={data.post.json_metadata.tags} />
  </header>
  <MdView markdown={data.post.body} />
  <footer><small>rawr</small></footer>
 </article>
  {#if data.comments}
    <Comments comments={data.comments} />
  {/if}
{:else}
<section id="loading">
  <h2>Loading</h2>
  <article aria-busy="true"></article>
</section>
{/if}
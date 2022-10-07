<script>
  /** @type {import('./$types').PageData} */
	import MdView from '../../../lib/components/MdView.svelte';
  import Tags from '../../../lib/components/Tags.svelte';
  export let data;
</script>

<article id="article">
  <header>
    <hgroup>
      <h1>{data.title}</h1>
        {#if data.json_metadata.description != undefined}
      <h2>{data.json_metadata.description}</h2>
        {:else}
      <h2> </h2>
        {/if}
    </hgroup> 
    <Tags tags={data.json_metadata.tags} />
  </header>
  <MdView markdown={data.body} />
  <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
 </article>
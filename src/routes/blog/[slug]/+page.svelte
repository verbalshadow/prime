<script>
  /** @type {import('./$types').PageData} */
  import { marked } from 'marked';
  import Tags from '../../../lib/components/Tags.svelte';
  export let data;

  let body = marked.parse(data.body)
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
  {@html body}
  <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
 </article>
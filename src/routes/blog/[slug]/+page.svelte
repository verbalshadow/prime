<script>
  /** @type {import('./$types').PageData} */
  import { marked } from 'marked';
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
    <ul>
      {#each data.json_metadata.tags as tag }
        <li>{tag}</li>
      {/each}
    </ul> 
  </header>
  {@html body}
  <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
 </article>

 <style>
    ul {
      display: inline;
      margin-left: -18px;
    }
    ul li{
      display: inline-flex;
      border-radius: 4px;
      background-color: var(--secondary);
      margin: 4px;
      padding: 3px 6px 3px 6px ;
    }
  </style>
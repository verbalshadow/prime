<script>
  export let art;
</script>

<article>
    <hgroup>
      <h2>{art.title}</h2>
      {#if art.json_metadata.description != undefined}
      <h3>{art.json_metadata.description}</h3>
      {:else}
      <h3> </h3>
      {/if}
    </hgroup> 
    <ul>
      {#each art.json_metadata.tags as tag }
      <li>{tag}</li>
      {/each}
    </ul> 
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
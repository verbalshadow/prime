<script>
  export let art;
  import Tags from "./Tags.svelte";
</script>

<article>
  <hgroup>
    <h2><a href={"./blog/" + art.permlink}>{art.title}</a></h2>
    {#if art.json_metadata.description != undefined}
    <h3>{art.json_metadata.description}</h3>
    {:else}
    <h3> </h3>
    {/if}
  </hgroup> 
  <Tags tags={art.json_metadata.tags} />
</article>
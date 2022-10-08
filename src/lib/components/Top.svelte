<script>
  export let permlink;
  export let description;
  export let title;
  export let author;
</script>

<hgroup>
  <h2 class="block"><a href={"/blog/" + permlink}>{title}</a></h2>
  {#if description != undefined}
  <h3>{description}</h3>
  {:else}
  <h3> </h3>
  {/if}
  <h4>By: {author}</h4>
</hgroup> 
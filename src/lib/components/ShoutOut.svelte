<script>
  /** @type {import('./$types').Pagepost} */
  export let name = "Hive";
  export let description = "Fast Feeless Blockchain Network.";
  export let image = "https://cryptologos.cc/logos/hive-blockchain-hive-logo.png?v=023";
  export let alttag = "Hive Logo";
  export let url = "https://hive.io";
</script>

<article class="shoutout">
  <header>
    <h2><a href={url} target="_blank">{name}</a></h2>
  </header>
  <img class="thumb" src={image} alt={alttag} />
  <footer>
    <p>{description}</p>
  </footer>
</article>

<style>
.thumb {
  max-width: 200px;
  max-height: 200px;
  display: inline;
}
.shoutout {
  max-width: 350px;
  max-height: 450px;
}
</style>
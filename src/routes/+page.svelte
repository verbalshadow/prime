<script>
    /** @type {import('./$types').PageData} */
	import ShoutOut from '../lib/components/ShoutOut.svelte';
</script>

<hgroup>
<h1>Welcome to <strong>Prime</strong></h1> 
<h2>The Quasi-Static Blog for Hive.</h2>
</hgroup>

<div class="ram">
    <ShoutOut name="V4V.app" description="Make payments bridge the Lightning & Hive Networks." alttag="V4V app logo" image="https://v4v.app/hivelightning-dark.png" url="https://v4v.app/"/>
    <ShoutOut />
    <ShoutOut />
</div>

<style>
.ram {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: space-between;
}
</style>

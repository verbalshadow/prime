<script>
    /** @type {import('./$types').PageData} */
	import ShoutOut from '$lib/components/ShoutOut.svelte';
	import { brand } from '$lib/stores/Settings';
	import Loading from '../lib/components/Loading.svelte';
</script>

<svelte:head>
    <title>{brand}</title>
</svelte:head>

<hgroup>
<h1>Welcome to <strong>Prime</strong></h1> 
<h2>The Quasi-Static Blog for Hive.</h2>
</hgroup>

<div class="ram">
    <ShoutOut 
        name="V4V.app" 
        description="Make payments with this bridge for Lightning & Hive Networks." 
        alttag="V4V app logo" image="https://v4v.app/hivelightning-dark.png" 
        url="https://v4v.app/"/>
    <ShoutOut 
        name="Podping" 
        description="Distributed notification system for new podcast episodes." 
        alttag="Podping logo" image="https://images.hive.blog/p/HNWT6DgoBc15VtwBcpcN8W6x3S58FykrX2mJhJ4xJgDWrw61zkdc5xpcNCXhDHTmjFasSiBPC8h3ssKkHK4s8ystkE7uMnauNYRRFYVv9tp3fggKM4NdjNF7y5p?width=512&height=512" 
        url="https://podping.org/"/>
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

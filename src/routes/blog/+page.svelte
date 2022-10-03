<script>
    /** @type {import('./$types').PageData} */
    import {posts} from '$lib/stores/HiveStore.js'
	import { attr } from 'svelte/internal';
    import Teaser from '../../lib/components/Teaser.svelte';
</script>

<h1>Recent Posts</h1>
{#each $posts as art}
    <Teaser art={art}/>
{/each}


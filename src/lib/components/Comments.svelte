<script>
    /** @type {import('./$types').PageData} */
    import Comment from './Comment.svelte';
    export let comments;
</script>

<section>
    {#each comments as comment }
        <Comment comment={comment} />
    {/each}
</section>



<script>
    /** @type {import('./$types').PageData} */
    import { findPostComments } from './Comments'
    import { postComments } from '../stores/HiveStore';
    import Comment from './Comment.svelte';
    export let author;
    export let permlink;
    findPostComments(author, permlink)
</script>

<section>
    {#each $postComments[permlink] as comment }
        <Comment comment={comment} />
    {/each}
</section>



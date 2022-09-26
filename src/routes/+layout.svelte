<script>
    import Header from '$lib/components/header.svelte'
    import Footer from '$lib/components/footer.svelte'
    import '@picocss/pico/'
    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<Header />
<main class="container">
  <slot />
</main>
<Footer />
<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '@picocss/pico/'
    /** @type {import('./$types').LayoutData} */
</script>

<Header />
<main class="container">
  <slot />
</main>
<Footer />
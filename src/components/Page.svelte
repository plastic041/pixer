<script>
  import Grid from "~/components/Grid.svelte";
  import Palette from "~/components/Palette.svelte";
  import Preview from "~/components/Preview.svelte";
  import Keys from "~/components/Keys.svelte";
  import Head from "~/components/Head.svelte";
  import Share from "~/components/Share.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
  />
</svelte:head>

<Head />
<Keys />
<main class="container">
  <div class="header">
    <Palette />
    <Preview />
  </div>
  <Grid />
  <Share />
</main>

<style>
  :global(body) {
    font-family: sans-serif;
  }

  .container {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 400px;
    max-width: 600px;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>

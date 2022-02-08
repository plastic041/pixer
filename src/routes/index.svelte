<script>
  import Grid from "~/components/Grid.svelte";
  import Palette from "~/components/Palette.svelte";
  import Preview from "~/components/Preview.svelte";
  import Keys from "~/components/Keys.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
  />
</svelte:head>

<Keys />
<main class="container">
  <Palette />
  <Preview />
  <Grid />
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    min-width: 400px;
    max-width: 600px;
  }
</style>

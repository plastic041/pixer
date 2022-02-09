<script lang="ts">
  import Page from "~/components/Page.svelte";
  import { page } from "$app/stores";
  import { grid } from "~/stores/stores";
  import { onMount } from "svelte";

  onMount(() => {
    const text = $page.params.text;
    grid.set(text);
  });
</script>

<Page />

<script lang="ts">
  import Page from "~/components/Page.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { grid } from "~/stores/stores";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";

  let timer;

  const debounce = (func: Function, delay: number) => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };

  const redirect = () => {
    const newURL = `${$page.url.origin}#${$grid}`;
    goto(newURL, { replaceState: true, noscroll: true, keepfocus: true });
  };

  $: if (browser) {
    grid.subscribe(() => debounce(redirect, 500));
  }

  onMount(() => {
    const text = $page.url.hash.slice(1);
    text && grid.set(text);
  });
</script>

<Page />

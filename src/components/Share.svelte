<script>
  import { grid } from "~/stores/stores";
  import { page } from "$app/stores";

  $: newURL = `${$page.url.origin}/${$grid}`;

  const onClick = () => {
    navigator.clipboard.writeText(newURL);
  };
</script>

<div class="share-container">
  <span>🔗</span>
  <input type="text" readonly bind:value={newURL} />
  <button on:click={onClick}>복사</button>
</div>

<style>
  .share-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }

  .share-container input {
    flex: 1;
    font-size: small;
  }
</style>

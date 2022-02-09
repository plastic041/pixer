<script>
  import SETTINGS from "~/stores/settings";
  import { grid } from "~/stores/stores";
</script>

<div class="container">
  <div
    class="preview-grid"
    style:--grid-width={SETTINGS.WIDTH}
    style:--grid-height={SETTINGS.HEIGHT}
  >
    {#each $grid as cell, index}
      <div
        class="preview-cell"
        style:--cell-color={SETTINGS.COLORS[parseInt(cell, 16)]}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .preview-grid {
    padding: 0.5rem;
    border: 2px solid black;
    display: grid;
    width: 100px;
    height: 100px;
    grid-gap: 0;
    grid-template-columns: repeat(var(--grid-width), 1fr);
    grid-template-rows: repeat(var(--grid-height), 1fr);
  }

  .preview-cell {
    width: 100%;
    height: 100%;
    background-color: var(--cell-color);
  }
</style>

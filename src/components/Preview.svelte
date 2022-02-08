<script>
  import SETTINGS from "~/stores/settings";
  import { grid } from "~/stores/stores";
</script>

<div class="preview-container">
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
  .preview-container {
    width: 80px;
    height: 80px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  .preview-grid {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border: 2px solid black;
    display: grid;
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

<script lang="ts">
  import Cell from "~/components/Cell.svelte";
  import SETTINGS from "~/stores/settings";
  import { grid, currentColorHex, cursor, size } from "~/stores/stores";

  const setCell = (index: number, colorIndex: string) => {
    const front = $grid.slice(0, index);
    const rear = $grid.slice(index + 1);
    grid.set(`${front}${colorIndex}${rear}`);
  };
</script>

<div class="container">
  <div class="grid" style:--grid-width={$size} style:--grid-height={$size}>
    {#each $grid as cell, index}
      <Cell
        color={SETTINGS.COLORS[parseInt(cell, 16)]}
        onSet={() => setCell(index, $currentColorHex)}
        current={index === $cursor}
      />
    {/each}
  </div>
</div>

<style>
  .container {
    width: 400px;
    height: 400px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  .grid {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border: 2px solid black;
    background-color: #fff;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(var(--grid-width), 1fr);
    grid-template-rows: repeat(var(--grid-height), 1fr);
  }
</style>

<script lang="ts">
  import SETTINGS from "~/stores/settings";
  import { currentColorHex } from "~/stores/stores";
  import type { Hex } from "~/typings/colors";
</script>

<div
  class="current-color"
  style:--current-color={SETTINGS.COLORS[$currentColorHex]}
/>
<div class="palette-container">
  <div class="palette">
    {#each SETTINGS.COLORS as color, index}
      {@const cellColorHex = index.toString(16)}
      <div
        class="palette-cell"
        class:current={$currentColorHex === cellColorHex}
        style:--palette-color={color}
        on:click={() => currentColorHex.set(index.toString(16))}
      />
    {/each}
  </div>
</div>

<style>
  .current-color {
    background-color: var(--current-color);
    width: 40px;
    height: 40px;
    transition: background-color 0.1s;
    border: 2px solid black;
    border-bottom: none;
  }

  .palette-container {
    display: flex;
  }

  .palette {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 2px solid black;
  }

  .palette-cell {
    width: 20px;
    height: 20px;
    background-color: var(--palette-color);
    transition: transform 0.1s;
  }

  .palette-cell:hover {
    transform: scale(1.1);
  }

  .current {
    box-shadow: 0 0 0 2px #fff inset;
  }
</style>

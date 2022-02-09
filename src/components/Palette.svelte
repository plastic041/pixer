<script lang="ts">
  import SETTINGS from "~/stores/settings";
  import { currentColorHex } from "~/stores/stores";
  import type { Hex } from "~/typings/colors";
</script>

<div class="container">
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
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .palette {
    display: grid;
    width: 100px;
    height: 100px;
    grid-template-columns: repeat(4, 1fr);
    border: 2px solid black;
  }

  .palette-cell {
    width: 100%;
    height: 100%;
    background-color: var(--palette-color);
    transition: transform 0.1s;
  }

  .palette-cell:hover {
    transform: scale(1.2);
  }

  .current {
    box-shadow: 0 0 0 2px #fff inset, 0 0 0 4px #000 inset;
  }
</style>

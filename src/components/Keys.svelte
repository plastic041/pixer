<script lang="ts">
  import { grid, cursor, currentColorHex, size } from "~/stores/stores";
  import SETTINGS from "~/stores/settings";

  const updateCursor = (dirX: number, dirY: number) => {
    const cursorX = $cursor % Number($size);
    const cursorY = Math.floor($cursor / Number($size));

    const newX = (cursorX + Number($size) + dirX) % Number($size);
    const newY = (cursorY + Number($size) + dirY) % Number($size);

    const newCursor = newY * Number($size) + newX;
    cursor.set(newCursor);
  };

  const setCell = (index: number, colorIndex: string) => {
    const front = $grid.slice(0, index);
    const rear = $grid.slice(index + 1);
    grid.set(`${front}${colorIndex}${rear}`);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === "ArrowUp") {
      updateCursor(0, -1);
    } else if (key === "ArrowDown") {
      updateCursor(0, 1);
    } else if (key === "ArrowLeft") {
      updateCursor(-1, 0);
    } else if (key === "ArrowRight") {
      updateCursor(1, 0);
    } else if (key === " " || key === "enter") {
      setCell($cursor, $currentColorHex);
    } else if (SETTINGS.KEYS[key]) {
      currentColorHex.set(SETTINGS.KEYS[key]);
    }
  };
</script>

<svelte:window on:keydown={handleKeyDown} />

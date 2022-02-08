<script>
	export let color;
	export let onSet;
	export let current;
</script>

<div
	style:background-color={color}
	class="cell"
	class:current
	on:click={onSet}
/>

<style>
	.cell {
		width: 100%;
		height: 100%;
		transition: transform 0.1s;
		cursor: pointer;
	}
	
	.cell:hover {
		transform: scale(1.1);
	}
	
	.current {
		box-shadow: 0 0 0 2px black inset, 0 0 0 4px white inset;
	}
</style>
<script lang="ts">
	// --background is passed as prop
	export let name = ''
</script>

<div
	class="background font-sebino flex w-fit items-center justify-center rounded-full px-5 py-1.5 text-black"
>
	{name}
</div>

<style lang="postcss">
	.background {
		background-color: var(--background);
	}
</style>

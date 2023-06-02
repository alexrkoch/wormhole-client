<script lang="ts">
	async function createRoom(): Promise<void> {
		// call create-room API
	}
	export let buttonText: string;
</script>

<button on:click={createRoom}>
	{buttonText}
</button>

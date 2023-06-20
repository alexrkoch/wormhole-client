<script lang="ts">
	export let roomCodePattern: RegExp = /.*/; // default to match anything
	$: input = "";
	$: isValid = roomCodePattern.test(input);

	async function joinRoom(roomCode: string): Promise<void> {
		// call join-room API
	}
</script>

<form on:submit|preventDefault={() => joinRoom(input)}>
	<input type="text" bind:value={input} data-testid="room-input" />
	<button type="submit" disabled={!isValid} data-testid="join-button"> Join Room </button>
</form>

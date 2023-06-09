<script lang="ts">
	import CreateRoom from '$lib/CreateRoom.svelte';
	import JoinRoom from '$lib/JoinRoom.svelte';

	let buttonText: string = 'Create a New Room';
	let roomCodePattern: RegExp = /^[A-Z]{6}$/;
</script>

<h1>Welcome to Wormhole!</h1>
<p>Please create a new room or join an existing room below</p>
<CreateRoom {buttonText} />
<JoinRoom {roomCodePattern} />

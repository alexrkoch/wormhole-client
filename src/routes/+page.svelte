<script lang="ts">
	import "../app.css";
	import CreateRoom from "$lib/CreateRoom.svelte";
	import JoinRoom from "$lib/JoinRoom.svelte";

	const buttonText: string = "Create a New Room";
	const roomCodePattern: RegExp = /^[A-Z]{6}$/;
</script>

<h1>Welcome to Wormhole!</h1>
<p>Please create a new room or join an existing room below</p>
<CreateRoom {buttonText} />
<JoinRoom {roomCodePattern} />

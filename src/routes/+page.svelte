<script>
	import CreateRoom from "$lib/CreateRoom.svelte";

  let buttonText = "Create a New Room"
</script>

<h1>Welcome to Wormhole!</h1>
<p>Please create a new room or join an existing room below</p>
<CreateRoom {buttonText}/>

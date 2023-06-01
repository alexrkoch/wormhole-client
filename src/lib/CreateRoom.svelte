<script lang="ts">
  function createRoom(): void {
    // call create-room API
  }
  export let buttonText: string;
</script>

<button on:click={createRoom}>
  {buttonText}
</button>
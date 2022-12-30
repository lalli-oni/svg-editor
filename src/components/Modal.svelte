<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import Button from "./Button.svelte";

    const dispatch = createEventDispatcher();

    export let show: boolean = true;

    let self: HTMLDialogElement;

    $: show ? self?.showModal() : self?.close();
    $: dispatch('modal-closed');
</script>


<dialog
    bind:this={self}
    class:hidden={show === false}
    class="flex flex-col bg-purple-900 rounded-sm justify-center align-baseline"
    >
        <slot></slot>
        <Button label="Close" on:click="{() => show = false}" />
</dialog>
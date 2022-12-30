<script lang="ts">
    export let title: string;
</script>

<div class="border border-white rounded-md p-2 flex flex-col gap-2 text-white">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <slot></slot>
</div>
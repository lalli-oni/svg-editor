<script lang="ts">
    export let label: string;
    export let disabled: boolean = false;
</script>


<label
    class="text-white h-full border border-white rounded-md m-1 p-1"
    class:underline="{disabled === false}"
    class:text-gray="{disabled}"
    class:underline-offset-2="{disabled === false}"
    class:hover:cursor-pointer="{disabled === false}"
    {disabled}
>
    {label}
    <input on:click {disabled} type="button">
</label>
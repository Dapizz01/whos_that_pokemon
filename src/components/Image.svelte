<script>
    export let path, trigger;
</script>

{#if trigger}
    <div class="slot">
        <img src={path} alt="Pokèmon sprite" />
    </div>
{/if}

<script>
    import Container from './Container.svelte';
    export let title, types, trigger;
</script>

<Container>
    {#each types as t, i}
        <div class="stat">
            <div class="stat-title">{title} #{i + 1}</div>
            {#if trigger}
                <div class="stat-value">{t}</div>
            {/if}
        </div>
    {/each}
</Container>

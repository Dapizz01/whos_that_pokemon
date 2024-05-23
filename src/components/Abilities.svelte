<script>
    import Container from './Container.svelte';
    export let title, abilities, trigger;
</script>

<Container>
    {#each abilities as { name, desc }, i}
        <div class="stat">
            <div class="stat-title">{title} #{i + 1}</div>
            {#if trigger}
                <div class="stat-value">{name}</div>
                <div class="stat-desc">{desc}</div>
            {/if}
        </div>
    {/each}
</Container>

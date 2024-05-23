<script>
    import Container from './Container.svelte';
    export let title, values, unit_measure, trigger;
</script>

<Container>
    {#each values as { name, desc }, i}
        <div class="stat">
            <div class="stat-title">{title} #{i + 1}</div>
            {#if trigger}
                <div class="stat-value">{name}{unit_measure}</div>
                <div class="stat-desc">{desc}</div>
            {/if}
        </div>
    {/each}
</Container>

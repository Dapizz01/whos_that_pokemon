<script>
    import Container from './Container.svelte';
    export let title, value, unit_measure, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            <div class="stat-value">{value} {unit_measure}</div>
        {/if}
    </div>
</Container>

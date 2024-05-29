<script>
    import { typewriter } from '../scripts/typewriter';
    import Container from './Container.svelte';
    export let title, value, unit_measure, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            <div class="stat-value" transition:typewriter>{value} {unit_measure}</div>
        {:else}
            <div class="stat-value">
                {'█'.repeat(value.length)}
                {'█'.repeat(unit_measure.length)}
            </div>
        {/if}
    </div>
</Container>

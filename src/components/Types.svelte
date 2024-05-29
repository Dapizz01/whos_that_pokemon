<script>
    import { typewriter } from '../scripts/typewriter';
    import Container from './Container.svelte';
    export let title, types, trigger;
</script>

<Container>
    {#each types as t, i}
        <div class="stat">
            <div class="stat-title">{title} #{i + 1}</div>
            {#if trigger}
                <div class="stat-value" transition:typewriter>{t}</div>
            {:else}
                <div class="stat-value">{'█'.repeat(t.length)}</div>
            {/if}
        </div>
    {/each}
</Container>

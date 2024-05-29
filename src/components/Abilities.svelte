<script>
    import Container from './Container.svelte';
    import { typewriter } from '../scripts/typewriter';
    export let title, abilities, trigger;
</script>

<Container>
    {#each abilities as { name, desc }, i}
        <div class="stat">
            <div class="stat-title">{title} #{i + 1}</div>
            {#if trigger}
                <div class="stat-value" transition:typewriter>{name}</div>
                <div class="stat-desc" transition:typewriter>{desc}</div>
            {:else}
                <div class="stat-value">{'█'.repeat(name.length)}</div>
                <div class="stat-desc">{'█'.repeat(desc.length)}</div>
            {/if}
        </div>
    {/each}
</Container>

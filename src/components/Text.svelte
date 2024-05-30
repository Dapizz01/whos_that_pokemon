<script>
    import Container from './Container.svelte';
    import { typewriter } from '../scripts/typewriter';
    export let title, text, desc, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            <p transition:typewriter>{text}</p>
            <div class="stat-desc" transition:typewriter>{desc}</div>
        {:else}
            <p>{'█'.repeat(text.length)}</p>
            <div class="stat-desc">{'█'.repeat(desc.length)}</div>
        {/if}
    </div>
</Container>

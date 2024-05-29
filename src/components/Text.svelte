<script>
    import Container from './Container.svelte';
    import { typewriter } from '../scripts/typewriter';
    export let title, text, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            <p transition:typewriter>{text}</p>
        {:else}
            <p>{'█'.repeat(text.length)}</p>
        {/if}
    </div>
</Container>

<script>
    import Container from './Container.svelte';
    export let title, text, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            {text}
        {/if}
    </div>
</Container>

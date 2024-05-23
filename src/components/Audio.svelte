<script>
    import Container from './Container.svelte';
    export let title, path, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        <div>
            {#if trigger}
                <audio controls>
                    <source src={path} type="audio/ogg" />
                </audio>
            {/if}
        </div>
    </div>
</Container>

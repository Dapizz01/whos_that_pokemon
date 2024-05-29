<script>
    import Container from './Container.svelte';
    export let title, path, trigger;

    function check_browser() {
        return navigator.userAgent.includes('Safari');
    }
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        <div>
            {#if trigger}
                <audio controls>
                    <source src={path} type="audio/ogg" />
                    test
                </audio>
            {/if}
        </div>
    </div>
</Container>

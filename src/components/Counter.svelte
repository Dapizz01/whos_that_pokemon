<script>
    import Container from './Container.svelte';
    export let title, timer;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        <div class="stat-value">{timer}</div>
    </div>
</Container>

<script>
    import Container from './Container.svelte';
    export let title, value;
</script>

<Container>
    <div
        class="stat"
        class:bg-success={value >= 3}
        class:bg-warning={value == 2}
        class:bg-error={value <= 1}
    >
        <div class="stat-title">{title}</div>
        <div class="stat-value">{value}</div>
    </div>
</Container>

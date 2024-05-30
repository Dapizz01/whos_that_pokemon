<script>
    export let path, trigger;
</script>

<div class="slot">
    <img src={path} style:visibility={trigger ? 'visible' : 'hidden'} alt="Pokèmon sprite" />
</div>

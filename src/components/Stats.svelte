<script>
    import Container from './Container.svelte';
    export let title, vals, trigger;
</script>

<Container>
    <div class="stat">
        <div class="stat-title">{title}</div>
        {#if trigger}
            <!-- TODO: Refactor this ugly stuff -->
            <div>
                <div>
                    HP <progress class="progress progress-primary w-56" value={vals[0]} max="255"
                    ></progress>
                </div>
                <div>
                    Atk <progress class="progress progress-secondary w-56" value={vals[1]} max="180"
                    ></progress>
                </div>
                <div>
                    Def <progress class="progress progress-accent w-56" value={vals[2]} max="200"
                    ></progress>
                </div>
                <div>
                    SpA <progress class="progress progress-success w-56" value={vals[3]} max="180"
                    ></progress>
                </div>
                <div>
                    SpD <progress class="progress progress-warning w-56" value={vals[4]} max="200"
                    ></progress>
                </div>
                <div>
                    Spe <progress class="progress progress-error w-56" value={vals[5]} max="200"
                    ></progress>
                </div>
            </div>
        {/if}
    </div>
</Container>

<script>
    import { Pokedex } from 'pokeapi-js-wrapper';
    import Select from 'svelte-select';
    import Header from './components/Header.svelte';
    import Pokemon_guess from './scripts/Pokemon_guess';
    import GenericSingle from './components/GenericSingle.svelte';
    import Text from './components/Text.svelte';
    import Image from './components/Image.svelte';
    import Stats from './components/Stats.svelte';
    import Audio from './components/Audio.svelte';
    import Counter from './components/Counter.svelte';
    import GenericMultiple from './components/GenericMultiple.svelte';
    import Abilities from './components/Abilities.svelte';
    import Types from './components/Types.svelte';
    const P = new Pokedex();

    let pokemon;
    let pokemons_list;
    let mask;
    let tries = 3;
    let not_guessed = false;
    let guessed = false;

    // TODO: The mask works, but... most likely there's a better way to handle this
    function free_mask() {
        mask = {
            show_height: true,
            show_weight: true,
            show_cry: true,
            show_name: true,
            show_types: true,
            show_abilities: true,
            show_stats: true,
            show_sprite: true,
            show_gen: true,
            show_entry: true,
        };
    }

    function reset_mask() {
        mask = {
            show_height: true,
            show_weight: true,
            show_cry: true,
            show_name: false,
            show_types: false,
            show_abilities: false,
            show_stats: false,
            show_sprite: false,
            show_gen: false,
            show_entry: false,
        };
    }

    async function setup() {
        if (pokemons_list == undefined || pokemons_list == null) {
            pokemons_list = (await P.getPokemonSpeciesList()).results.map((entry) => entry.name);
        }
        reset_mask();
        not_guessed = false;
        guessed = false;
        tries = 3;
        return await reroll_pokemon();
    }

    async function reroll_pokemon() {
        let random_id = Math.floor(Math.random() * pokemons_list.length);
        const pokemon_name = pokemons_list[random_id];

        let raw_pokemon_species = await P.getPokemonSpeciesByName(pokemon_name);
        // Sometimes the Pokèmon name on the API isn't the name of the species (ex: wishiwashi),
        // so the default form is chosen
        let raw_pokemon = await P.getPokemonByName(
            raw_pokemon_species.varieties.filter((variety) => variety.is_default)[0].pokemon.name,
        );
        console.log(raw_pokemon);
        console.log(raw_pokemon_species);
        let abilities_data = await P.resource(
            raw_pokemon.abilities.map((ability) => ability.ability.url),
        );
        console.log(abilities_data);
        pokemon = new Pokemon_guess(raw_pokemon, raw_pokemon_species, abilities_data);
        console.log(pokemon);
        return pokemon;
    }

    function use_try(event) {
        if (event.detail.value == pokemon.name) {
            guessed = true;
            free_mask();
            return;
        }
        tries -= 1;
        switch (tries) {
            case 2:
                mask.show_abilities = true;
                mask.show_types = true;
                mask.show_stats = true;
                break;
            case 1:
                mask.show_entry = true;
                mask.show_gen = true;
                break;
            case 0:
                free_mask();
                not_guessed = true;
                break;
        }
    }

    function handle_reset() {
        setup_promise = setup();
    }

    let setup_promise = setup();
    let user_guess = null;
</script>

<main>
    <!-- TODO: Are the stats too helpful? Maybe it's better to put some more obscure hints like catch rate, shape, gender rate, ... -->
    <Header />
    {#await setup_promise}
        Loading...
    {:then pokemon}
        {#if guessed}
            <div role="alert" class="alert alert-success center-text">
                <span>You got it right, congrats!</span>
                <button on:click={handle_reset}>Retry</button>
            </div>
        {/if}
        {#if not_guessed}
            <div role="alert" class="alert alert-error">
                <span>Unfortunately, your tries are over. Try again!</span>
                <button on:click={handle_reset}>Retry</button>
            </div>
        {/if}
        <!-- class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5" -->
        <div id="info_container">
            <Image path={pokemon.sprite} trigger={mask.show_sprite} />
            <Counter title="Tries left" value={tries}></Counter>
            <GenericSingle
                title="Name"
                value={pokemon.name}
                unit_measure=""
                trigger={mask.show_name}
            />
            <GenericSingle
                title="Weight"
                value={pokemon.weight}
                unit_measure="kg"
                trigger={mask.show_weight}
            />
            <GenericSingle
                title="Height"
                value={pokemon.height}
                unit_measure="m"
                trigger={mask.show_height}
            />
            <GenericSingle
                title="Generation"
                value={pokemon.gen}
                unit_measure=""
                trigger={mask.show_gen}
            />
            <Abilities
                title="Ability"
                abilities={pokemon.abilities}
                trigger={mask.show_abilities}
            />
            <Types title="Type" types={pokemon.types} trigger={mask.show_types} />
            <Audio title="Cry" path={pokemon.cry} trigger={mask.show_cry} />
            <Text
                title="Pokedex entry"
                text={pokemon.pokedex_entry.text}
                desc={'Source: Pokèmon ' + pokemon.pokedex_entry.source}
                trigger={mask.show_entry}
            />
            <!--Stats title="Stats" vals={pokemon.stats} trigger={mask.show_stats} /-->
        </div>

        <!-- TODO: Fix style of Select -->
        <Select
            class="select"
            items={pokemons_list}
            bind:value={user_guess}
            on:select={use_try}
            placeholder="Pick a Pokèmon"
            disabled={not_guessed || guessed}
        ></Select>
    {/await}
</main>

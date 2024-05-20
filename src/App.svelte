<script>
    import Header from './components/Header.svelte';
    import { Pokedex } from 'pokeapi-js-wrapper';
    import Pokemon_guess from './scripts/Pokemon_guess';
    const P = new Pokedex();

    let pokemon = {
        name: 'unknown',
        height: 0,
        weight: 0,
        cry: null,
        stats: [0, 0, 0, 0, 0, 0],
        sprite: null,
        pokedex_entry: '',
        types: ['', ''],
        abilities: ['', ''],
        gen: 0,
    };

    let all_pokemons;

    async function setup() {
        all_pokemons = (await P.getPokemonsList()).results;
        await reroll_pokemon();
    }

    async function reroll_pokemon() {
        let random_id = Math.floor(Math.random() * all_pokemons.length);
        let new_pokemon = await P.getPokemonByName(all_pokemons[random_id].name);
        let new_pokemon_species = await P.getPokemonSpeciesByName(all_pokemons[random_id].name);
        pokemon = new Pokemon_guess(new_pokemon, new_pokemon_species);
    }

    setup();
</script>

<main>
    <Header />
</main>

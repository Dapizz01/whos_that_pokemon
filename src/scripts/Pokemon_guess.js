export default class Pokemon_guess {
    constructor(raw_pokemon, raw_pokemon_species, abilities_data) {
        // @ts-ignore
        // if (raw_pokemon instanceof Pokemon) {
        this.name = raw_pokemon.name;
        this.height = raw_pokemon.height / 10; // Conversion to meters
        this.weight = raw_pokemon.weight / 10; // Conversion to KG
        this.cry = raw_pokemon.cries.latest;
        this.stats = [
            raw_pokemon.stats[0].base_stat, // HP
            raw_pokemon.stats[1].base_stat, // Attack
            raw_pokemon.stats[2].base_stat, // Defense
            raw_pokemon.stats[3].base_stat, // Sp. Atk.
            raw_pokemon.stats[4].base_stat, // Sp. Def.
            raw_pokemon.stats[5].base_stat, // Speed
        ];
        this.abilities = abilities_data.map((ability) => ({
            name: ability.name,
            desc: ability.flavor_text_entries.filter((entry) => entry.language.name == 'en').pop()
                .flavor_text,
        }));
        this.sprite = raw_pokemon.sprites.other['official-artwork']['front_default']; // IDK why it's not official_artwork...
        this.gen = raw_pokemon_species.generation.name;
        this.types = raw_pokemon.types.map((type) => type.type.name);
        this.pokedex_entry = raw_pokemon_species.flavor_text_entries
            .filter((entry) => entry.language.name == 'en')
            .pop()
            .flavor_text.replace(new RegExp(raw_pokemon_species.name, 'i'), '<Pokèmon_name>');
        // Missing ability description
        // }
    }
}

export default class Pokemon_guess {
    constructor(raw_pokemon, raw_pokemon_species) {
        // @ts-ignore
        if (raw_pokemon instanceof Pokemon) {
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
            this.abilities = [];
            raw_pokemon.abilities.forEach((ability) => {
                this.abilities.push(ability.name);
            });
            // Missing sprite, ability description, pokedex entry, gen
        }
    }
}

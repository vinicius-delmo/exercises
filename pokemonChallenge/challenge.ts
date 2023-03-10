import { Pokemon, pokemons, pokemonTypesInPtBR } from "./data.js";

//Function que procura um pokemon por nome:

/* const searchPokemon = (pokemons: Pokemon[], name: string): Pokemon | undefined => pokemons.find((pokemon) => pokemon.name === name);

const pokemonData: Pokemon | undefined = searchPokemon(pokemons, "charmeleon");
console.log(pokemonData); */

//Listar todos os pokemons de um mesmo tipo

/* const filterPokemons = (pokemons: Pokemon[], type: string ): Pokemon[] | undefined =>
    pokemons.filter((pokemon) => pokemon.type.includes(type));

const sameTypeOfPokemons: Pokemon[] | undefined = filterPokemons(
    pokemons,
    "fire"
);
console.log(sameTypeOfPokemons); */

// Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

const pokemonsInPTBR = pokemons.map((pokemon: Pokemon): Pokemon => {
    const changeTypesToPtBR = pokemon.type.map(
        (type: string): string => pokemonTypesInPtBR[type]
    );
    pokemon.type = changeTypesToPtBR;
    return pokemon;
});

console.log(pokemonsInPTBR);

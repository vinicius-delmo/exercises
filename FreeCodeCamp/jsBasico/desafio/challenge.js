import { pokemons } from "./data.js";
import { pokemonTypesInPtBR } from "./data.js";

//Function que procura um pokemon por nome:

const searchPokemon = (pokemons, name) =>
  pokemons.find((pokemon) => pokemon.name === name);

const pokemonData = searchPokemon(pokemons, "pidgeot");
console.log(pokemonData);

//Listar todos os pokemons de um mesmo tipo

/*const filterPokemons = (pokemons, type) =>
  pokemons.filter((pokemon) => pokemon.type.includes(type));

const sameTypeOfPokemons = filterPokemons(pokemons, "bug");
console.log(sameTypeOfPokemons);

// Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo

const pokemonsInPTBR = pokemons.map((pokemons) => {
  const changeTypesToPtBR = pokemons.type.map(
    (type) => pokemonTypesInPtBR[type]
  );
  return { ...pokemons, type: changeTypesToPtBR };
});
console.log(pokemonsInPTBR);*/

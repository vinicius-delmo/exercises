"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
const data_js_2 = require("./data.js");
//Function que procura um pokemon por nome:
const searchPokemon = (pokemons, name) => pokemons.find((pokemon) => pokemon.name === name);
const pokemonData = searchPokemon(data_js_1.pokemons, "charmeleon");
console.log(pokemonData);
//Listar todos os pokemons de um mesmo tipo
const filterPokemons = (pokemons, type) => pokemons.filter((pokemon) => pokemon.type.includes(type));
const sameTypeOfPokemons = filterPokemons(data_js_1.pokemons, "bug");
console.log(sameTypeOfPokemons);
// Alterar o nome dos tipos dos pokemons de inglês para português, ex.: Fire => Fogo
const pokemonsInPTBR = data_js_1.pokemons.map((pokemon) => {
    const changeTypesToPtBR = pokemon.type.map((type) => data_js_2.pokemonTypesInPtBR[type]);
    pokemon.type = changeTypesToPtBR;
    return pokemon;
});
console.log(pokemonsInPTBR);

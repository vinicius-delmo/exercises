export {Pokemon, pokemons, pokemonTypesInPtBR }

interface Pokemon {
    name: string,
    type: string[],
    weight: number,
    height: number,
    id: number,
}

const pokemons: Pokemon[] = [
    {
      name: "bulbasaur",
      type: ["grass", "poison"],
      weight: 69,
      height: 7,
      id: 1,
    },
    {
      name: "ivysaur",
      type: ["grass", "poison"],
      weight: 130,
      height: 10,
      id: 2,
    },
    {
      name: "venusaur",
      type: ["grass", "poison"],
      weight: 1000,
      height: 20,
      id: 3,
    },
    {
      name: "charmander",
      type: ["fire"],
      weight: 85,
      height: 6,
      id: 4,
    },
    {
      name: "charmeleon",
      type: ["fire"],
      weight: 190,
      height: 11,
      id: 5,
    },
    {
      name: "charizard",
      type: ["fire", "flying"],
      weight: 905,
      height: 17,
      id: 6,
    },
    {
      name: "squirtle",
      type: ["water"],
      weight: 90,
      height: 5,
      id: 7,
    },
    {
      name: "wartortle",
      type: ["water"],
      weight: 225,
      height: 10,
      id: 8,
    },
    {
      name: "blastoise",
      type: ["water"],
      weight: 855,
      height: 16,
      id: 9,
    },
    {
      name: "caterpie",
      type: ["bug"],
      weight: 29,
      height: 3,
      id: 10,
    },
    {
      name: "metapod",
      type: ["bug"],
      weight: 99,
      height: 7,
      id: 11,
    },
    {
      name: "butterfree",
      type: ["bug", "flying"],
      weight: 320,
      height: 11,
      id: 12,
    },
    {
      name: "weedle",
      type: ["bug", "poison"],
      weight: 32,
      height: 3,
      id: 13,
    },
    {
      name: "kakuna",
      type: ["bug", "poison"],
      weight: 100,
      height: 6,
      id: 14,
    },
    {
      name: "beedrill",
      type: ["bug", "poison"],
      weight: 295,
      height: 10,
      id: 15,
    },
    {
      name: "pidgey",
      type: ["normal", "flying"],
      weight: 18,
      height: 3,
      id: 16,
    },
    {
      name: "pidgeotto",
      type: ["normal", "flying"],
      weight: 300,
      height: 11,
      id: 17,
    },
    {
      name: "pidgeot",
      type: ["normal", "flying"],
      weight: 395,
      height: 15,
      id: 18,
    },
    {
      name: "rattata",
      type: ["normal"],
      weight: 35,
      height: 3,
      id: 19,
    },
    {
      name: "raticate",
      type: ["normal"],
      weight: 185,
      height: 7,
      id: 20,
    },
    {
      name: "spearow",
      type: ["normal", "flying"],
      weight: 20,
      height: 3,
      id: 21,
    },
    {
      name: "fearow",
      type: ["normal", "flying"],
      weight: 380,
      height: 12,
      id: 22,
    },
    {
      name: "ekans",
      type: ["poison"],
      weight: 69,
      height: 20,
      id: 23,
    },
    {
      name: "arbok",
      type: ["poison"],
      weight: 650,
      height: 35,
      id: 24,
    },
    {
      name: "pikachu",
      type: ["electric"],
      weight: 60,
      height: 4,
      id: 25,
    },
    {
      name: "raichu",
      type: ["electric"],
      weight: 300,
      height: 8,
      id: 26,
    },
    {
      name: "sandshrew",
      type: ["ground"],
      weight: 120,
      height: 6,
      id: 27,
    },
    {
      name: "sandslash",
      type: ["ground"],
      weight: 295,
      height: 10,
      id: 28,
    },
    {
      name: "nidoran-f",
      type: ["poison"],
      weight: 70,
      height: 4,
      id: 29,
    },
    {
      name: "nidorina",
      type: ["poison"],
      weight: 200,
      height: 8,
      id: 30,
    },
    {
      name: "nidoqueen",
      type: ["poison", "ground"],
      weight: 600,
      height: 13,
      id: 31,
    },
    {
      name: "nidoran-m",
      type: ["poison"],
      weight: 90,
      height: 5,
      id: 32,
    },
    {
      name: "nidorino",
      type: ["poison"],
      weight: 195,
      height: 9,
      id: 33,
    },
    {
      name: "nidoking",
      type: ["poison", "ground"],
      weight: 620,
      height: 14,
      id: 34,
    },
    {
      name: "clefairy",
      type: ["fairy"],
      weight: 75,
      height: 6,
      id: 35,
    },
    {
      name: "clefable",
      type: ["fairy"],
      weight: 400,
      height: 13,
      id: 36,
    },
    {
      name: "vulpix",
      type: ["fire"],
      weight: 99,
      height: 6,
      id: 37,
    },
    {
      name: "ninetales",
      type: ["fire"],
      weight: 199,
      height: 11,
      id: 38,
    },
    {
      name: "jigglypuff",
      type: ["normal", "fairy"],
      weight: 55,
      height: 5,
      id: 39,
    },
    {
      name: "wigglytuff",
      type: ["normal", "fairy"],
      weight: 120,
      height: 10,
      id: 40,
    },
    {
      name: "zubat",
      type: ["poison", "flying"],
      weight: 75,
      height: 8,
      id: 41,
    },
    {
      name: "golbat",
      type: ["poison", "flying"],
      weight: 550,
      height: 16,
      id: 42,
    },
    {
      name: "oddish",
      type: ["grass", "poison"],
      weight: 54,
      height: 5,
      id: 43,
    },
    {
      name: "gloom",
      type: ["grass", "poison"],
      weight: 86,
      height: 8,
      id: 44,
    },
    {
      name: "vileplume",
      type: ["grass", "poison"],
      weight: 186,
      height: 12,
      id: 45,
    },
    {
      name: "paras",
      type: ["bug", "grass"],
      weight: 54,
      height: 3,
      id: 46,
    },
    {
      name: "parasect",
      type: ["bug", "grass"],
      weight: 295,
      height: 10,
      id: 47,
    },
    {
      name: "venonat",
      type: ["bug", "poison"],
      weight: 300,
      height: 10,
      id: 48,
    },
    {
      name: "venomoth",
      type: ["bug", "poison"],
      weight: 125,
      height: 15,
      id: 49,
    },
    {
      name: "dugtrio",
      type: ["ground"],
      weight: 333,
      height: 7,
      id: 50,
    },
    {
      name: "meowth",
      type: ["normal"],
      weight: 42,
      height: 4,
      id: 51,
    },
    {
      name: "persian",
      type: ["normal"],
      weight: 320,
      height: 10,
      id: 52,
    },
    {
      name: "psyduck",
      type: ["water"],
      weight: 196,
      height: 8,
      id: 53,
    },
    {
      name: "golduck",
      type: ["water"],
      weight: 766,
      height: 17,
      id: 54,
    },
    {
      name: "mankey",
      type: ["fighting"],
      weight: 280,
      height: 5,
      id: 55,
    },
    {
      name: "primeape",
      type: ["fighting"],
      weight: 320,
      height: 10,
      id: 56,
    },
    {
      name: "growlithe",
      type: ["fire"],
      weight: 190,
      height: 7,
      id: 57,
    },
    {
      name: "arcanine",
      type: ["fire"],
      weight: 1550,
      height: 19,
      id: 58,
    },
    {
      name: "poliwag",
      type: ["water"],
      weight: 124,
      height: 6,
      id: 59,
    },
    {
      name: "poliwhirl",
      type: ["water"],
      weight: 200,
      height: 10,
      id: 60,
    },
    {
      name: "poliwrath",
      type: ["water", "fighting"],
      weight: 540,
      height: 13,
      id: 61,
    },
    {
      name: "abra",
      type: ["psychic"],
      weight: 195,
      height: 9,
      id: 62,
    },
    {
      name: "kadabra",
      type: ["psychic"],
      weight: 565,
      height: 13,
      id: 63,
    },
    {
      name: "alakazam",
      type: ["psychic"],
      weight: 480,
      height: 15,
      id: 64,
    },
    {
      name: "machop",
      type: ["fighting"],
      weight: 195,
      height: 8,
      id: 65,
    },
    {
      name: "machoke",
      type: ["fighting"],
      weight: 705,
      height: 15,
      id: 66,
    },
    {
      name: "machamp",
      type: ["fighting"],
      weight: 1300,
      height: 16,
      id: 67,
    },
    {
      name: "bellsprout",
      type: ["grass", "poison"],
      weight: 40,
      height: 7,
      id: 68,
    },
    {
      name: "weepinbell",
      type: ["grass", "poison"],
      weight: 64,
      height: 10,
      id: 69,
    },
    {
      name: "victreebel",
      type: ["grass", "poison"],
      weight: 155,
      height: 17,
      id: 70,
    },
    {
      name: "tentacool",
      type: ["water", "poison"],
      weight: 455,
      height: 9,
      id: 71,
    },
    {
      name: "tentacruel",
      type: ["water", "poison"],
      weight: 550,
      height: 16,
      id: 72,
    },
    {
      name: "geodude",
      type: ["rock", "ground"],
      weight: 200,
      height: 4,
      id: 73,
    },
    {
      name: "graveler",
      type: ["rock", "ground"],
      weight: 1050,
      height: 10,
      id: 74,
    },
    {
      name: "golem",
      type: ["rock", "ground"],
      weight: 3000,
      height: 14,
      id: 75,
    },
    {
      name: "ponyta",
      type: ["fire"],
      weight: 300,
      height: 10,
      id: 76,
    },
    {
      name: "rapidash",
      type: ["fire"],
      weight: 950,
      height: 17,
      id: 77,
    },
    {
      name: "slowpoke",
      type: ["water", "psychic"],
      weight: 360,
      height: 12,
      id: 78,
    },
    {
      name: "slowbro",
      type: ["water", "psychic"],
      weight: 785,
      height: 16,
      id: 79,
    },
    {
      name: "magnemite",
      type: ["electric", "steel"],
      weight: 60,
      height: 3,
      id: 80,
    },
    {
      name: "magneton",
      type: ["electric", "steel"],
      weight: 600,
      height: 10,
      id: 81,
    },
    {
      name: "farfetchd",
      type: ["normal", "flying"],
      weight: 150,
      height: 8,
      id: 82,
    },
    {
      name: "doduo",
      type: ["normal", "flying"],
      weight: 392,
      height: 14,
      id: 83,
    },
    {
      name: "dodrio",
      type: ["normal", "flying"],
      weight: 852,
      height: 18,
      id: 84,
    },
    {
      name: "seel",
      type: ["water"],
      weight: 900,
      height: 11,
      id: 85,
    },
    {
      name: "dewgong",
      type: ["water", "ice"],
      weight: 1200,
      height: 17,
      id: 86,
    },
    {
      name: "grimer",
      type: ["poison"],
      weight: 300,
      height: 9,
      id: 87,
    },
    {
      name: "muk",
      type: ["poison"],
      weight: 300,
      height: 12,
      id: 88,
    },
    {
      name: "shellder",
      type: ["water"],
      weight: 40,
      height: 3,
      id: 89,
    },
    {
      name: "cloyster",
      type: ["water", "ice"],
      weight: 1325,
      height: 15,
      id: 90,
    },
    {
      name: "gastly",
      type: ["ghost", "poison"],
      weight: 1,
      height: 13,
      id: 91,
    },
    {
      name: "haunter",
      type: ["ghost", "poison"],
      weight: 1,
      height: 16,
      id: 92,
    },
    {
      name: "gengar",
      type: ["ghost", "poison"],
      weight: 405,
      height: 15,
      id: 93,
    },
    {
      name: "onix",
      type: ["rock", "ground"],
      weight: 2100,
      height: 88,
      id: 94,
    },
    {
      name: "drowzee",
      type: ["psychic"],
      weight: 324,
      height: 10,
      id: 95,
    },
    {
      name: "hypno",
      type: ["psychic"],
      weight: 756,
      height: 16,
      id: 96,
    },
    {
      name: "krabby",
      type: ["water"],
      weight: 65,
      height: 4,
      id: 97,
    },
    {
      name: "kingler",
      type: ["water"],
      weight: 600,
      height: 13,
      id: 98,
    },
  ];



    const pokemonTypesInPtBR: { [key: string]: string } = {
    normal: "normal",
    fire: "fogo",
    water: "água",
    grass: "grama",
    flying: "voador",
    fighting: "lutador",
    poison: "veneno",
    electric: "elétrico",
    ground: "terra",
    rock: "pedra",
    psychic: "psíquico",
    ice: "gelo",
    bug: "inseto",
    ghost: "fantasma",
    steel: "ferro",
    dragon: "dragão",
    dark: "sombrio",
    fairy: "fada",
  };

  
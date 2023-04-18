const getPokemon = async id => {
  const url = 'https://pokeapi.co/api/v2/pokemon/1' + id;
  const result = await fetch(url).then(request => request.json());
  return {
    name: result.name,
    id: result.id,
    type: result.types.map(item => item.type.name),
  };
};
const get100Pokemons = async () => {
  const pokemons = [];
  for (let index = 0; index < 100; index++) {
    pokemons.push(await getPokemon(index));
  }
  console.log(pokemons);
};
get100Pokemons();

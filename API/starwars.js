const getPersonStarWars = async id => {
  const url = 'https://swapi.dev/api/people/1' + id;
  const result = await fetch(url).then(request => request.json());
  return {
    name: result.name,
    height: result.height,
    mass: result.mass,
  };
};
const get10PersonStarWars = async () => {
  const person = [];
  for (let index = 0; index < 10; index++) {
    person.push(await getPersonStarWars(index));
  }
  console.log(person);
};
get10PersonStarWars();

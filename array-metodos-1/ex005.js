/*5. Crie uma função, que utilize map(), que receba uma array de objetos.
Uma das propriedades de cada objeto é a propriedade age. A função
deve retornar outra array com 3 dados:
a. a menor idade;
b. a maior idade, e
c. a diferença entre elas.
Dica: use Math. https://www.w3schools.com/js/js_math.asp
Exemplo:
const input = [
{
name: "John",
age: 13,
},
{
name: "Mark",
age: 56,
},
{
name: "Rachel",
age: 45,
},
{
name: "Nate",
age: 67,
},
{
name: "Jennifer",
age: 65,
},
];

// teste
console.log(functionName(input));
// [13, 67, 54];*/
const personsInformation = [
    {
    name: "John",
    age: 13,
    },
    {
    name: "Mark",
    age: 56,
    },
    {
    name: "Rachel",
    age: 45,
    },
    {
    name: "Nate",
    age: 67,
    },
    {
    name: "Jennifer",
    age: 65,
    },
    ];


const ageDifference = personsInformation => 
    {const ages = personsInformation.map(personsInformation => personsInformation.age);
    const minorAge = Math.min(...ages);
    const olderAge = Math.max(...ages);
    const ageDifference = olderAge - minorAge;
    return [minorAge, olderAge, ageDifference]};
    
console.log(ageDifference(personsInformation));
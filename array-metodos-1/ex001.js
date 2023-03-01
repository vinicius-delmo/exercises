/*1. Crie uma função que, ao receber uma array, gere um clone desta
array.
Por exemplo:
console.log(functionName([1, 2, 4, 0]));
// [1, 2, 4, 0]
console.log(functionName([1, 2, [7, 10]]));
// [1, 2, [7, 10]]*/

const numbersToCopy = [1, 2, 45, [3, 5]];
const copyArray = () => numbersToCopy.slice();
console.log(copyArray(numbersToCopy));
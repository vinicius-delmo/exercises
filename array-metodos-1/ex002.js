/*2. Crie uma função que, ao receber como parâmetros uma array e um
número (opcional), cria uma outra array com os valores iniciais da
array original de acordo com o número passado. Método: slice().
Por exemplo:
console.log(funtionName([7, 9, 0, -2],3)); ok
// [7, 9, 0]
console.log(funtionName([7, 9, 0, -2])); 
// 7
console.log(funtionName([],3)); ok
// []
console.log(funtionName([7, 9, 0, -2],6)); ok
// [7, 9, 0, -2]
console.log(funtionName([7, 9, 0, -2],-3)); ok
// []*/

const modifyArray = (arrayToModify, num) => {
if (num < 0 || arrayToModify.length === 0) {
    return [];
  } if (num === undefined){
    return arrayToModify[0];
  }
  return arrayToModify.slice(0, num);
}
console.log(modifyArray([7, 9, 0, -2], 3));
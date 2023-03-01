/*4 - Crie uma função que receba uma array de strings e retorne outra
array apenas com os elementos de até 5 caracteres da array original.
Exemplo:
// teste
console.log(functionaName(["cachorro", "pato", "oi", "família",
"comer", "camping", aquarela”]));
// ["pato", "oi", "comer"]*/

const filterArray = arrayToFilter => arrayToFilter.filter(filteredWord => filteredWord.length < 6)
    
console.log(filterArray(["cachorro", "pato", "oi", "família",
"comer", "camping", "aquarela"]));
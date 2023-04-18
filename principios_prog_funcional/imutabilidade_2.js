const nums = [4, 3, 5, 6, 1, 8];

//Mutáveis - 1 Estratégia

/* let total = 0;

for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total); */

//Reduce - 2 estratégia
/* const somar = (a, b) => a + b;
const total = nums.reduce(somar);
console.log(total); */

//Recursividade - 3 estratégia

function somarArray(arr, total = 0) {
  if (arr.length === 0) {
    return total;
  }
  return somarArray(arr.slice(1), total + arr[0]);
}
const total = somarArray(nums);
console.log(total);

// A programação funcional cria novas versões dos dados, por isso gasta mais memória

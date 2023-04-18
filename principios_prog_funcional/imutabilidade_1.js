function ordenar(array) {
  return [...array].sort();
}

const nums = [3, 1, 7, 9, 4, 6];
const nums2 = Object.freeze([3, 1, 7, 9, 4, 6]); //Congelando o objeto e não permite alteração.
const numsOrdenados = ordenar(nums);

ordenar(nums);
console.log(nums, numsOrdenados);

//se você recebe um array pode criar um clone, para aplicar o principio da imutabilidade
//e não alterar os dados originais

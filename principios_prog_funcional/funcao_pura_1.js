//Pura ou impura?
//é uma função impura, pois o PI é externo a função
//const PI = 3.14;
function areaCircPura(raio, pi) {
  return raio * raio * pi; //estável
}

console.log(areaCircPura(10, 3.14));

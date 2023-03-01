/*3. Crie uma função que aceite uma array numérica como parâmetro e:
a. retorne outra array com todos os valores concatenados na forma
de uma string, e
b. com um sinal de ponto inserido a cada 3 numerais.
Exemplo:
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
// “123.456.78”*/

const addPoint = arrayOfNumber => 
arrayOfNumber.reduce((acc, cur, index) => index % 3 === 0 && index !== 0 ? acc + "." + cur : acc + cur, "");

console.log(addPoint([1, 2, 3, 4, 5, 6, 7, 8]));
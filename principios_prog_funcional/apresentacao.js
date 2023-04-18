/* function calculateTriangleArea(base, heighAt) {
  return (base * height) / 2;
}

const area = calculateTriangleArea(4, 5);
console.log(area);  */

/* function calculateTriangleArea(base) {
  return function (height) {
    return (base * height) / 2;
  };
}

const area = calculateTriangleArea(4)(5);
console.log(area);
 */

/* function sumList(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

const myList = [1, 2, 3, 4, 5];
console.log(sumList(myList)); */

/* function sumList(list) {
  return function* () {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
      yield sum;
    }
  };
}

const myList = [1, 2, 3, 4, 5];
const lazySum = sumList(myList);

let sum = 0;
for (const s of lazySum()) {
  sum = s;
}
console.log(sum); // 15
 */

/* function calculateHypotenuse(height, base) {
  const sumOfSquares = height * height + base * base;
  const hypotenuse = Math.sqrt(sumOfSquares);
  return hypotenuse;
}

console.log(calculateHypotenuse(5, 6)); */

/* function square(x) {
  return x * x;
}

function sum(x, y) {
  return x + y;
}

function CalculateHypotenuse(height, base) {
  const sumOfSquares = sum(square(height), square(base));
  const hypotenuse = Math.sqrt(sumOfSquares);
  return hypotenuse;
} 
 */
//console.log(CalculateHypotenuse(5, 6));

/* const square = x => x * x;
const sum = x => y => x + y;
const calculateHypotenuse = height => base => {
  const sumOfSquares = sum(square(height))(square(base));
  const hypotenuse = Math.sqrt(sumOfSquares);
  return hypotenuse;
};

console.log(calculateHypotenuse(5)(6));
 */
/* 
function getTime() {
  return new Date().getTime();
}

function timeDiff(startTime, endTime) {
  return endTime - startTime;
}

let startTime = getTime();
let endTime = getTime();
let diff = timeDiff(startTime, endTime);
console.log(`Tempo decorrido: ${diff} ms`);




function eager(a, b) {
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(a, 3);
  return valor + b;
}

function lazy(a) {
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}
  const valor = Math.pow(a, 3);
  return function (b) {
    return valor + b;
  };
}


console.time('#1');
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd('#1');

console.time('#2');
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd('#2');
 */

/* function msgEncerramento() {
  console.log('Seu tempo acabou!! Tente novamente!!');
  const tempTotal = setTimeout(msgEncerramento, 3000);
  while (msgEncerramento < tempTotal) {}
}
console.log(msgEncerramento());
console.log(msgEncerramento());
 */

/* function msgEncerramento() {
  let contador = 0;

  const intervalo = setInterval(() => {
    console.log('Seu tempo acabou!! Tente novamente!!');
    contador++;

    if (contador === 3) {
      clearInterval(intervalo);
    }
  }, 3000);
}

msgEncerramento(); */

/* function* gerarMensagens() {
  let contador = 0;

  while (contador < 3) {
    yield 'Seu tempo acabou!! Tente novamente!!';
    contador++;
  }
}

const intervalo = setInterval(() => {
  const proximaMensagem = gerarMensagens().next();

  if (proximaMensagem.done) {
    clearInterval(intervalo);
  } else {
    console.log(proximaMensagem.value);
  }
}, 3000); */

/* function eager(a, b) {
  const end = performance.now() + 2500;
  while (performance.now() < end) {}
  const value = Math.pow(a, 3);
  return value + b;
}

console.log(eager(2, 5));
console.log(eager(2, 4));
console.log(eager(3, 2)); */

/* function lazy(a) {
  const end = performance.now() + 2500;
  while (performance.now() < end) {}
  const value = Math.pow(a, 3);
  return function (b) {
    return value + b;
  };
}

const lazy6 = lazy(6);
console.log(lazy6(5));
console.log(lazy6(4));
console.log(lazy6(2));
 */

/* const string = 'ABCDEF';
string[0] = '4';

console.log(string); // "ABCDEF" */

//
/* const person = {
  name: 'Ana',
  age: 25,
};
Object.freeze(person);
person.name = 'Bia';

console.log(person); //{ name: 'Ana', age: 25 }
 */



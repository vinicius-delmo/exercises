//DESAFIO 01
//Função somar(3 + 4 + 5)

const sum = (numberA) => {
  return function (numberB) {
    return function (numberC) {
      return numberA + numberB + numberC;
    };
  };
};

const result = sum(3)(4)(5);
console.log(result);

//Função calcular(3)(7)(fn)

//Funções -> Operações

const numberMultiplication = (firstNumber, secondNumber) =>
  firstNumber * secondNumber;

const numberSum = (firstNumber, secondNumber) => firstNumber + secondNumber;

const numberSubtract = (firstNumber, secondNumber) =>
  firstNumber - secondNumber;

//Operação de multiplicação

const operation1 = (firstNumber) => {
  return (secondNumber) => numberMultiplication(firstNumber, secondNumber);
};
const resultOperation1 = operation1(2)(4);
console.log(resultOperation1);

//Operação de soma

const operation2 = (firstNumber) => {
  return (secondNumber) => numberSum(firstNumber, secondNumber);
};
const resultOperation2 = operation2(2)(4);
console.log(resultOperation2);

//Operação de subtração

const operation3 = (firstNumber) => {
  return (secondNumber) => numberSubtract(firstNumber, secondNumber);
};
const resultOperation3 = operation3(2)(4);
console.log(resultOperation3);

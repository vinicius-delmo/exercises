const sayHello = (namePerson) => "Hello " + namePerson + " !!!";
console.log(sayHello("ViniciusS"));

const sayHello2 = (namePerson) => `Hello ${namePerson} !!!`;
console.log(sayHello2("Delmo"));

const sum = (numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};

console.log(sum([1, 2, 3, 4, 5]));

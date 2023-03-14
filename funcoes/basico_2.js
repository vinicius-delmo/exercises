function goodMorning() {
  console.log("Good Morning");
}

const goodAfternnon = () => {
  console.log("Good Afternoon");
};

//passar função como parâmetro para outra função
function runAnything(fn) {
  if (typeof fn == "function") {
    fn();
  }
}

runAnything(3);
runAnything(goodMorning);
runAnything(goodAfternnon);

// Retornar uma função a partir de outra função

function power(base) {
  return function (exponent) {
    return Math.pow(base, exponent);
  };
}

const powerOf2 = power(2);
console.log(powerOf2(8));

/* function sumNumbers() {
  let result = 1 + 1;
  if (result == 2) {
    sucessCallBack();
  } else {
    errorCallBack();
  }
}

function sucessCallBack() {
  console.log("Sim é dois!");
}
function errorCallBack() {
  console.log("Ops, não é dois!");
}

sumNumbers(); */

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Sucess");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((err) => {
  console.log("This is the catch " + err);
});

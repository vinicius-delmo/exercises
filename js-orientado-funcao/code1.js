/* function fn3() {
  setTimeout(() => console.log("timeout"), 3000);
  console.log("fn3");
}
function fn2() {
  fn3();
}
function fn1() {
  fn2();
}
function main() {
  fn1();
}
main();
console.log("Fim"); */

function esperarPor(tempo) {
  const futuro = Date.now() + tempo;
  while (Date.now() < futuro) {}
}
esperarPor(5000);
console.log("Fim");

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}
/* 
esperarPor(2000)
  .then(() => console.log("Executando promise..."))
  .then(esperarPor)
  .then(() => console.log("Executando promise..."))
  .then(esperarPor)
  .then(() => console.log("Executando promise..."));
 */

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();
  await esperarPor(1500);
  console.log(`Async/Await 1...${valor}`);
  await esperarPor(1500);
  console.log(`Async/Await 1...${valor * 2}`);
  await esperarPor(1500);
  console.log(`Async/Await 1...${valor * 3}`);
}
executar();

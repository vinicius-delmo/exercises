const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "dados.txt");

function showContent(err, contents) {
  console.log(contents.toString());
}
console.log("Inicio...");
fs.readFile(route, showContent);
fs.readFile(route, (_, contents) => console.log(contents.toString()));
console.log("Fim...");

console.log("Inicio Sync...");
const content = fs.readFileSync(route);
console.log(content.toString());
console.log("Fim Sync...");

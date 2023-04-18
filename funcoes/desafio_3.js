const fs = require("fs");
const path = require("path");

const showContent = () => {
  return new Promise((resolve, reject) => {
    resolve(
      fs.readFile(route, (_, contents) => console.log(contents.toString()))
    );
    console.log("Depois de ler...");
  });
};

const route = path.join(__dirname, "dados.txt");
showContent(route).then((contents) => console.log(contents));

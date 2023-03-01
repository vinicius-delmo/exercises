/* 1. Crie uma função para adicionar uma nova linguagem à chave
"languages". */

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addLanguage = (language) => programming.languages.push(language);
addLanguage("c#");
console.log(programming);

//////////////////////////////////////////////////////////

/* 2. Crie uma função para alterar o valor do nível de dificuldade
("difficulty"). */

const changeDifficulty = (numberOfDifficuty) =>
  (programming.difficulty = numberOfDifficuty);
changeDifficulty(9);
console.log(programming);

//////////////////////////////////////////////////////////

/* 3. Crie uma função para excluir uma chave do objeto. */

const deleteKey = (object, key) => delete object[key];
deleteKey(programming, "jokes");
console.log(programming);

//////////////////////////////////////////////////////////

/* 4. Crie uma função para adicionar uma nova chave. Faça um teste
criando uma chave com nome isFun e valor true. */

const addKey = (object, key, value) => (object[key] = value);
addKey(programming, "isFun", true);
console.log(programming);

//////////////////////////////////////////////////////////

/* 5. Crie uma função para exibir no console todas as linguagens de
programação armazenadas na chave "languages". */

const showLanguages = (object) => console.log(object.languages);
showLanguages(programming);

//////////////////////////////////////////////////////////

/* 6. Crie uma função para exibir no console o nome de todas as chaves
do objeto. */
const showKeys = (object) => console.log(Object.keys(object));
showKeys(programming);

//////////////////////////////////////////////////////////

/* 7. Crie uma função para exibir no console todos os valores do objeto. */

const showValues = (object) => console.log(Object.values(object));
showValues(programming);

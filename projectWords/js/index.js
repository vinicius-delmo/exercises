const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'data', 'legendas');

const simbolos = [
  '.',
  '?',
  '-',
  ',',
  ',,',
  ',,,',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarPor('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarPor(' '))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
  .then(console.log);

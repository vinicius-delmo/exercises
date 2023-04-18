const fs = require('fs');
const path = require('path');



function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map(arquivo =>
        path.join(caminho, arquivo),
      );
      resolve(arquivosCompletos);
    } catch {
      e;
    }
    {
      reject(e);
    }
  });
}
function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { enconding: 'utf-8' });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter(el => el.endsWith(padraoTextual));
  };
}

function removerElementosSeVazio(array) {
  return array.filter(el => el.trim());
}

function removerElementosSeIncluir(padraoTextual) {
  return function (array) {
    return array.filter(el => !el.includes(padraoTextual));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter(el => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map(el => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join('');
      }, el);
    });
  };
}

function mesclarElementos(array) {
  return array.join(' ');
}

function separarPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((agrupamento, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1;
      agrupamento[el] = { elemento: el, qtde };
      return agrupamento;
    }, {}),
  );
}


  
module.exports = {
  composition,
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementos,
  separarPor,
  agruparElementos,
  ordenarPorAtributoNumerico,
};

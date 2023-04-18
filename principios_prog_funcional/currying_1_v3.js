function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(soma(1)(2)(3));

function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || '').trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

function aplicarValidacao(fn) {
  return function (valor) {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const forcarTamanhoPadrão = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrão('Nome Produto Inválido');
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 };
const p2 = { nome: 'Ab', preco: 14.99, desc: 0.25 };
forcarNomeProdutoValido(p1.nome);
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));

//O currying permite criar versões parciais de uma função

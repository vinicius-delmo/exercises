const pessoa = {
  nome: 'Maria',
  altura: 1.65,
  cidade: 'Bh',
};
//Passagem por Referência

function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = 'João';
  novaPessoa.cidade = 'Contagem';
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);
console.log(pessoa);
console.log(novaPessoa);

//terminal:{ nome: 'Maria', altura: 1.65, cidade: 'Bh' }
//{ nome: 'João', altura: 1.65, cidade: 'Contagem' }

//Você clonou o objeto, entretando um shalow clone, apenas no primeiro nível
//Caso o objeto possua mais níveis esses niveis não serão clonados

let a = 3;
let b = a; //atribuição por valor(cópia)

a++;
b--;
console.log(a, b);

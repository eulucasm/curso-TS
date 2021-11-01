/*
Declaration mergin -> podemos declarar interfaces separadas com o mesmo nome, que elas
se uniram formando uma unica interface "ficticia"
*/

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Marques',
  enderecos: ['Av jose, numero x'],
  idade: 31,
};

console.log(pessoa);

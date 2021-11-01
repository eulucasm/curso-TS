/*
Implementando Type Alias em classes
implementando apenas um tipo para a classe
*/

type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
  //nomeCompleto: () => string;
};

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lucas', 'Marques');
console.log(pessoa.nomeCompleto());

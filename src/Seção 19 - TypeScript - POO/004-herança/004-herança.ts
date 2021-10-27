/*
Aula de herança -> entendendo UML e aplicando ao codigo
*/

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {}

const aluno = new Aluno('Lucas', 'Marques', 31, '000.000.000-00');
const cliente = new Cliente('Angela', 'Marques', 50, '000.000.000-00');
const pessoa = new Pessoa('Maria', 'Marques', 70, '000.000.000-00');

console.log(aluno.getNomeCompleto());
console.log(cliente);
console.log(pessoa);

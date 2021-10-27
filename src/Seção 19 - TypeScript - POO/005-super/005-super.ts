/*
Aula de herança -> entendendo UML e aplicando ao codigo
*/

//Super class
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

//subclass
export class Aluno extends Pessoa {
  /*
  getNomeCompleto(): string {
    console.log('fazendo algo');
    return super.getNomeCompleto();
  }
  */
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('fazendo algo');
    const result = super.getNomeCompleto();
    return result + 'Qualquer coisa';
  }
}

//subclass
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Lucas', 'Marques', 31, '000.000.000-00', 'Segundo B');
const cliente = new Cliente('Angela', 'Marques', 50, '000.000.000-00');
const pessoa = new Pessoa('Maria', 'Marques', 70, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);

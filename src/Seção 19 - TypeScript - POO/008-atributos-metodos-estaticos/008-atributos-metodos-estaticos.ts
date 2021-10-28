/*
Classe é um molde para criar objetos a pessoa la em baixo é o objeto ou instancia da classe
*/

export class Pessoa {
  //atributo statico
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  //metodo
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // static falaOi(): void {
  //   console.log('oi');
  // } //função dentro da classe
}

const pessoa1 = new Pessoa('Lucas', 'Marques', 31, '123.456.789-99');
const pessoa2 = Pessoa.criaPessoa('lucas', 'marques');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();

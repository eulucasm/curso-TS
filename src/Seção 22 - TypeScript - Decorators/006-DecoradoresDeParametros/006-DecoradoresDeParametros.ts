/*
Aula sobre decoradores de parametros(parameter decorator)
*/
function decorador(classPrototype: any, nomeMetodo: string | symbol, index: number): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome} ${this.idade}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('João', 'da Silva', 30);
const metodo = pessoa.metodo('hoy');
console.log(metodo);

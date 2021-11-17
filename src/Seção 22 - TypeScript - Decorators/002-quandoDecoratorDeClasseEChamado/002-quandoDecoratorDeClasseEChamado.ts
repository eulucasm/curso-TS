/*
Quando o decorator de classe é chamado
*/
//a ordem das funções nao importa pois em JS as funções são executadas de forma LIFO, ou seja
//, acostece um roistin, e é chamada as funções em ordem de execução, e nao de ordanação.

@inverteStrings
export class Animal {
  constructor(public cor: string, public nome: string) {
    console.log('Aqui é a classe');
  }
}

//                           >.........Decorador.......<
function inverteStrings<T extends new (...args: any[]) => any>(target: T): T {
  console.log('aqui é o decorador, e recebi', target);

  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[1]);
      this.cor = this.inverte(args[0]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join(''); //aqui invertendo o valor da string
    }
  };
}

const animal = new Animal('Preto', 'Bidu');
console.log(animal);

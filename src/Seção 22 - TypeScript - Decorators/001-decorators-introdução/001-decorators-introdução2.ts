/*
 Decorator de classes no TypeScript - Introdução
*/
@decorator
export class Animal {
  constructor(public cor: string, public nome: string) {}
}
//                           >.........Decorador.......<
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
    }
    inverte(valor: string): string {
      return valor.split('').reverse().join(''); //aqui invertendo o valor da string
    }
  };
}

const animal = new Animal('Preto', 'Bidu');
console.log(animal);

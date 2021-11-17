/*
Aula sobre Decorator Factories (Fábrica de decoradores)
*/

@inverteStrings('valor1', 'valor2')
export class Animal {
  constructor(public cor: string, public nome: string) {
    console.log('Aqui é a classe');
  }
}

function inverteStrings(param1: string, param2: string) {
  //Clousure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2; //aqui invertendo o valor da string
      }
    };
  };
}

const animal = new Animal('Preto', 'Bidu');
console.log(animal);

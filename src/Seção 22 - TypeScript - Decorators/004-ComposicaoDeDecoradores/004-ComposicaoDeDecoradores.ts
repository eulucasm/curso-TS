/*
aulas sobre Composição de decoradores
*/
/*
pode ser assim também:
interface Constructor{
  new (...args: any[]):any
}
*/
type Constructor = new (...args: any[]) => any;

function inverteStrings(param1: string, param2: string) {
  //Clousure
  return function (target: Constructor) {
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

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('sou o outro decorador' + param1);
    return target;
  };
}
/*
function outroDecorador(target: Constructor) {
  console.log('sou o outro decorador');
  return target;
}
*/
@outroDecorador(' parametro do outro decorador') //chamado segundo
@inverteStrings('valor1', 'valor2') //chamado primeiro
export class Animal {
  constructor(public cor: string, public nome: string) {
    console.log('Aqui é a classe');
  }
}

const animal = new Animal('Preto', 'Bidu');
console.log(animal);

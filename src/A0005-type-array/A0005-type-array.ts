/*
Array
Array <T> <-> T[] (T = tipo)

Na função multiplicaArgs, o uso do :number é desnecessario, e no caso esta sendo
usado a fins de estudo mesmo. a função sabe que o retorno é um number, porem, deixaremos
explito o tipo retornado

*/
//Generics
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
//informando o tipo do array
export function concatenaStings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStings('a', 'b', 'c');
const maiuscula = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(maiuscula);

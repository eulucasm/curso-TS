/*
Aula sobre Overload de métodos e funções em Typescript
Overload é quando você tem mais de um método com o mesmo nome, mas com parâmetros diferentes.
exemplo do adder
*/

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 3, 4));

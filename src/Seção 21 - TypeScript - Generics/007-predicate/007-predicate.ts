/*
Aula sobre Type Predicate(predicado de tipo)
*/
//imagine se que quero criar uma função que checa se um valor é um number

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
} //assim que eu chamar essa função, ela vai retornar um boolean, e se for true, ela retorna um number.

console.log(isNumber(123));
console.log(isNumber('123'));

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(...[1, 2, 3, 'a', 'b', 'c']);

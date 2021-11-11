/*
Generics -> Tipos genéricos

*/

/*//Função original
export function meuFilter(array: unknown[], callbackfn: FilterCallback): unknown[] {
   const newArray = [];
   for (let i = 0; i < array.length; i++) {
      if (callbackfn(array[i])) {
         newArray.push(array[i]);
      }
   }
   return newArray;
}
*/
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(arrayFiltrado);

/*//Função com generics ligada a original
const arrayFiltrado = meuFilter(array, (value) => {
  if (typeof value === 'number') return value < 5;
  return false;
});
console.log(arrayFiltrado);
*/

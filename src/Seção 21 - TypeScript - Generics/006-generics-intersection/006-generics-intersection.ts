/*
Aula de Generics com intersection
*/
//Imagine uma função para juntar dois objetos

function unirObjetos<T1, T2>(obj1: T1, obj2: T2): T1 & T2 {
  //return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };
const unir = unirObjetos(obj1, obj2);
console.log(unir);

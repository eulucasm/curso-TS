/*
 Decorator de classes no TypeScript - Introdução
*/

export class Animal {
  constructor(public cor: string) {}
}

function decorator(target: any): any {
  console.log('passei no decorator');
  return target;
}

//isso é o mesmo que
//const AnimalDecorated = Animal;
const AnimalDecorated = decorator(Animal);

const animal = new AnimalDecorated('Preto');
console.log(animal);

/*
Tipos literais ->
*/

let x = 10; //eslint-disable-line
x = 0b1010;

const y = 10; //y é do tipo literal pois esta explicito que y é 10

let a = 100 as const; //eslint-disable-line

//objeto... no caso, o as const é uma asserção.
const pessoa = {
  nome: 'Lucas' as const,
  sobrenome: 'Marques',
};

function escolhaCor(cor: 'vermelhor' | 'amarelo' | 'azul') {
  return cor;
}
console.log(escolhaCor);

//Module mode
export default 1;

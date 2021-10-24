/*
Tipo Unknown -> Mesma coisa que o tipo Any, porem mais seguro
ele vem antes do Any na hierarquia... no caso ele é o pai de todos os outros tipos.
*/

let x: unknown;

x = 100;
x = 'Lucas';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

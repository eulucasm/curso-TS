/*
Entendendo tipos de bibliotecas de terceiros

Vimos como criar uma nova tipagem dentro de uma biblioteca de terceiros.
no caso, criamos o arquivo meu-declarations.d.ts, e dentro dele incluimos uma tipagem para
conseguir multiplicar numeros de um array. (_.mul)

O declaration files só fala sobre tipos.
Entao, foi ensino a entrar em uma biblioteca de terceiros, e fazer um declaration merge com as minhas
configurações.
*/
import _ from './modulo';

const array = [100, 200, 300, 400];

console.log(global.MINHAGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));

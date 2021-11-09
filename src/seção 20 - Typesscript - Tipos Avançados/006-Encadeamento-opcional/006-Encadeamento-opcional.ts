/*
Aula Sobre Encadeamento opcional e Operador de coalescência nula
lançado no ECMAScript2020
Com ele você evita de fazer um if ternário(varios Ifs)

obs1: os unicos valores em js que são NãoValores são undefined, null.
obs2: Operador de coalescência nula verifica se a espressao da esquerda retornal algo,
      caso returne null ou undefined ele retorna o valor da direita
*/

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Romance',
  texto: 'Eu te amo',
  //data: new Date(),
};

console.log(documento.data?.toDateString()); //Encadeamento opcional
console.log(documento.data?.toDateString() ?? '1 -Não existe data'); //Operador de coalescência nula
console.log(undefined ?? '2 -Não existe data'); //Operador de coalescência nula
console.log(null ?? '3 -Não existe data'); //Operador de coalescência nula
console.log(false ?? '4 -Não existe data'); //Operador de coalescência nula
console.log(0 ?? '5 -Não existe data'); //Operador de coalescência nula
console.log('-' ?? '5 -Não existe data'); //Operador de coalescência nula

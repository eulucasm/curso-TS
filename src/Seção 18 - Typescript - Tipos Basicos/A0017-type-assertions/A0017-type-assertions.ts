/*
Type Assertions -> asserções
é como se fosse um type casting, convertendo de um tipo para outro
*/

/* Recomendado */
//Condicional -> quando não tenho certeza
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';

/* Não recomendado */
//Non-Null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type Assertion
const body4 = document.querySelector('body') as unknown as number;

/*
Tipos Null e Undefined
null = nulo
undefined = não definido ou ainda não definido
Ambos os tipos representão um "Não Valor", mas a intenção de uso deles é diferente
*/
/*
No exemplo a seguir, definimos que se x for undefined(sem definição), será atribuido
o valor 20 a x. Com isso no consolog, teremos x = 20 (number)
se caso comentemos a linha de definição if, nosso x sera undefined, gerando um erro
no consolog, isso por conta de estar tentando multiplixar uma variavel indefinida
*/
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  /* aqui é abertura da função */
  firstName: string,
  lastName?: string,
): {
  /* aqui é typeAnnotation */
  firstName: string;
  lastName?: string;
} {
  return {
    /* Corpo da Função*/
    firstName,
    lastName,
  };
}

/*<------------------------------------------------------------------------------>*/
//Null

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squarOfTwoNumber = squareOf(2);

if (squarOfTwoNumber === null) {
  console.log('Conta invalida');
} else {
  console.log(squarOfTwoNumber);
}

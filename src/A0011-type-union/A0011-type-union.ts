/*
Union types -> uma variavel, parametro, um retorno de função, pode ter mais de um typo.
exp = string | number (aqui temos o ou represtado pelo pipe "|")
*/
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  //if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));

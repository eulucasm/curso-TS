/*
Intersection type ->   & => AND
*/
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

//type Pessoa = TemNome | TemSobrenome | TemIdade;
type Pessoa = TemNome & TemSobrenome & TemIdade; // aqui lemos o & como and

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Lucas',
  sobrenome: 'Marques',
};
console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type Intersecao = AB & AC & AD;

//module mode
export { pessoa };

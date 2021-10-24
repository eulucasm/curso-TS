/*
Alias -> Basicamente, é criar um apelido para um tipo
do mesmo jeito que usando const, var, let para criar variaveis, utilizando a palavra type
para criar um alias
*/

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};
type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Lucas',
  salario: 100_000, //200.000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Preto'));

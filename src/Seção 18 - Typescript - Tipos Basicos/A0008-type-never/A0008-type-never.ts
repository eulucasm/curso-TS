/*
Never -> quer dizer que aquela função ou metodo nunca vai retornar nada
Temos duas possibilidades de um "nunca retorne nada"
1ª um laço infinito
2ª um erro -> + comum
*/

export function criaErro(): never /* ou void */ {
  throw new Error('Erro qualquer');
}

criaErro();

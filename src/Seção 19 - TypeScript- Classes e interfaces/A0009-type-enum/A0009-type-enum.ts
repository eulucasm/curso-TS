/*
Enum -> não é implementado em JS puro, apenas no TS e outras linguagens
essa estrutura de dados, é não ordenada e é utilizado quando temos mais de uma opção
para alguma coisa...ex: UF: [SP, RJ, SC]
*/
enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}
//NO CASO OS ENUS se unem a uma estrutura de dados quandos declarados com o mesmo nome
enum Cores {
  ROXO = 'ROXO',
  VERDE = 30,
  ROSA,
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}
escolhaCor(Cores.ROSA);

//console.log(Cores)
//console.log(Cores.VERMELHO);
//console.log(Cores[0]);

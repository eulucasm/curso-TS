/*
Objetos em JS são mega importantes pois, tudo é objeto em js, uma classe, uma função
contrutora... tudo retorna um objeto
Sendo tão importante, o TS tbm é muito restrito com objetos
*/

const objetoA: {
  readonly chaveA: string; //não pode alterar o valor da chave, pois foi travada com readonly
  chaveB: string;
  chaveC?: number; // ? deixa o item opcional
  [key: string]: unknown; // ou any ->libera a inserção de itens no objeto objetoA -> index signature
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
  chaveC: 30,
};

objetoA.chaveD = 'outro valor';

console.log(objetoA);

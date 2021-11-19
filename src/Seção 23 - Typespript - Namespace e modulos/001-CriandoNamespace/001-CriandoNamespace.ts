/*
Aula sobre Criando NameSpace
recurso para criar namespace dentro do arquivo
no TS, não é tão utilizado, pois no TS ja temos o sistema de modulos.
o sistema de exportar e importar modulos claramente é um namespace
*/
/*eslint-disable @typescript-eslint/no-namespace */
/*
serve apenas para criar um escopo privado para utilização, impossibilitando o acesso
de fora do escopo
só conseguimos utilizar coisas de dentro do name space se exportamos o item a ser usado
depois chamamos esse item como no exemplo: MeuNamespace.PessoaDoNamespace
com namespace conseguimos exportar classes, funções, constantes, etc

podemos até criar um namespace dentro de outro namespace
*/
namespace MeuNamespace {
  const nomeNovo = 'João';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
  //utilizando por dentro do namespace
  const pessoaDoNamespace = new PessoaDoNamespace(nomeNovo);
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoOutroNamespace = 'Maria';
  }
}
//utilizando por fora do namespace
const nomeNovo = 'Lucas';
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace(nomeNovo);
console.log(pessoaDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);

export default 1;

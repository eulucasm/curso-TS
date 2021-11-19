/*eslint-disable @typescript-eslint/no-namespace */
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

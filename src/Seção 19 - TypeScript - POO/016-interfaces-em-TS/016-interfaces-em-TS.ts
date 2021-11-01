/*
Interafaces -> em 99,9% dos casos identicas a type alias
interfaces e type alias funcionam da mesma maneira
são parar criar tipos ou contratos
interfaces estão muito mais relacionadas a objetos

*/
interface TipoNome {
  nome: string;
}
interface TipoSobrenome {
  sobrenome: string;
}
interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}
export class Pessoa2 implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lucas', 'Marques');
console.log(pessoa.nomeCompleto());

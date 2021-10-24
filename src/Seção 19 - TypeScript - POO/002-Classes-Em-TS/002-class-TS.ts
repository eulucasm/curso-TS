/*
Criando uma classe, você também estará criando um tipo
*/
export class Empresa {
  public readonly nome: string; //se nao passar a palavra public, automaticamente ele sera puclico
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Lucas', 'Marques');
const colaborador2 = new Colaborador('joao', 'Marques');
const colaborador3 = new Colaborador('jose', 'Marques');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Estrutural',
  sobrenome: 'Marques',
});

console.log(empresa1);

empresa1.mostrarColaboradores();

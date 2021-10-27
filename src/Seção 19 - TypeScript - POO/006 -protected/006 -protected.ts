/*
Protected -> libera o acesso dentro da classe em que foi criado e as suas respectivas subclasses
Private -> libera o acesso apenas dentro da classe em que foi criado
*/
export class Empresa {
  public readonly nome: string; //se nao passar a palavra public, automaticamente ele sera puclico
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {}
}

const empresa1 = new Udemy();
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
empresa1.popColaborador();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);

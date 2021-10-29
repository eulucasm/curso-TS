/*
Classes, metodos e atributos abstratos

abstract-> ao usar a palavra abstract na classe, informacos que ela (classe) não pode mais
ser instanciada diretamente, ou seja, só podemos instanciala por subclasses concretas, nesse caso
temos a classe "Gerreira", "Monstro" também é uma classe concreta
*/

export abstract class Personagem {
  constructor(protected nome: string, protected ataque: number, protected vida: number) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  bordao(): void {
    console.log('Agora é seu fimmmmmm... Ataque da guerreira');
  }
}

export class Monstro extends Personagem {
  bordao(): void {
    console.log('Monstro com fome... Ataque do Monstro');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Guerreira', 75, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

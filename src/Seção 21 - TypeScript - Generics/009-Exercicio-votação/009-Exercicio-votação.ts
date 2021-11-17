type VotationOption = {
  numberOfvotes: number;
  option: string;
};

//classe de votação
export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  //metodo para adicionar votos
  addVotationOption(votatationOption: VotationOption): void {
    this._votationOptions.push(votatationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

//classe de votação é injetada na classe votationApp
//classe App
export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
      console.log('_____');
      console.log('');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'JavaScript', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Java', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual sua comida favorita?');
votation2.addVotationOption({ option: 'Batata', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'Jiló', numberOfvotes: 0 });
votation2.addVotationOption({ option: 'tomate', numberOfvotes: 0 });
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);

//instanciando a classe VotationApp
const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();

/*
Uma função ou metodo void quer dizer que uma função ou metodo não retorna nada
obg: quando usamos o rest operator( ...args) temos um array

um metodo é basicamente uma função que ta dentro de um objeto ou classe.
*/

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lucas',

  exibirNome(): void {
    console.log(this.nome);
  },
};

semRetorno('lucas', 'marques');
pessoa.exibirNome();

export { pessoa };

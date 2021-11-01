/*
Aula sobre Typeof e Keyof
*/

// type CoresObj = {
//   vermelho: string;
//   azul: string;
//   verde: string;
// };

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores: typeof coresObj): string {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));

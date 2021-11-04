/*
Usando Chaves com tipos -> isso vai ajudar a manter o codigo mais limpo e organizado.
*/

type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  names: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  names: 'Fiesta',
};

console.log(carro);

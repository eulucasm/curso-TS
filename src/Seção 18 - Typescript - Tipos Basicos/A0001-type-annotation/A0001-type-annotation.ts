/* eslint-disable */
//o eslint foi desativado por o ts ja sabe que nome é um string pela inferencia de tipos
//com isso, se não desativar o lint, sera retornado erro por redundancia de inferencia

//tipos são letras minusculas iniciais, e valores com maiusculas
//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'luiz'; //qualquer tipo de strings: '' "" ``
let idade: number = 30; //10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol');//symbol
//let big: bigint = 10n; //bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4];
let arrayDeNumeros2: number[] =[1, 2, 3, 4];
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd'];
let arrayDeStrings2: string[] = ['a', 'b', 'c', 'd'];

//Objetos ---------- o ? em adulto, torna o atributo opcional
let pessoa: {nome: string, idade:number, adulto?:boolean} = {
  nome: 'Lucas',
  idade: 31,
  adulto: true,
};

//Funções
function soma(x:number, y:number): number{
  return x+y;
}
const result = soma(2,2);

const soma2:(x:number, y:number) => number = (x,y) => x+y;
/*
Tudo que vem depois dos : após a função é type anotation
*/

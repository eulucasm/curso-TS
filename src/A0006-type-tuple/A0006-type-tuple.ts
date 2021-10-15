/*
o tipo Tuple não existe no js puro, ou seja, é um tipo exclusivo do TS
porém, o ts utiliza arrays do js parar fazer as tuplas
a tupla é um array bem expecifico de tamanho fixo
*/

//imagine uma tupla que tenha no indice 0 um numero e no indice 1 uma string
const dadosCliente1: [number, string] = [1, 'Lucas']; //tupla-> array de tamanho fixo
//podemos mudar os dados contidos no array, contando que ele seja do mesmo tipo
dadosCliente1[0] = 100;
dadosCliente1[1] = 'Lucão';
console.log(dadosCliente1);

//? deixa o valor opcional
const dadosCliente2: [number, string, string?] = [2, 'lucas memo'];
console.log(dadosCliente2);

//podemos usar rest operator
const dadosCliente3: [number, string, ...string[]] = [3, 'lucas', 'poha', 'veia'];
console.log(dadosCliente3);

//deixando a tuple imutavel
const dadosCliente4: readonly [number, string] = [20, 'Lucas imutavel'];
console.log(dadosCliente4);

//readonly array
//definindo um array imutavel
const array1: readonly string[] = ['lucas', 'lucao', 'oloco'];
console.log(array1);

//array com generics imutavel
const array2: ReadonlyArray<string> = ['lucas', 'lucao', 'oloco'];
console.log(array2);

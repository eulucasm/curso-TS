/*
tipagem Any nao retorna erro e me possibilita efetuar diversos tipos de trabalhos
soma, retornar dados, fazer consultas...

*/
function showMessage(msg: any) {
  return msg;
}
console.log(showMessage([1, 2, 3]));
console.log(showMessage('olá'));
console.log(showMessage(1));

/*
Resumo:
Associação -> é a relação mais fraca entre os objetos... só queremos dizer que um objeto usa outro
objeto em determinado momento do codigo.

Agragação -> aqui ja estamos falando de uma relação mais forte, nesse caso, um objeto precisa do
outro objeto
*_________________________________________________________________________________________________*

Composição entre Classes -> é uma relação MUITO mais forte que as anteriores.

Composição -> aqui falamos que um objeto tem outro objeto como parte dele...
exemplo:
carro e rodas são relacionados a agregação pois, sem as rodas, o carro nao funciona corretamente;

carro e motor são relacionados a Composição, pois o motor é basicamente o carro inteiro, pois o motor
é responsavel por fazer o carro funcionar, é como se fosse o coração da coisa.
Outro exemplo: a relação entre ser humano e coração... Uma pessoa não funciona sem um coração.

No exemplo de codigo a seguir, vamos fazer uma classe fazer parte de outra classe, ou seja, uma não
vai existir sem a outra.
*/

export class Carro {
  private readonly motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor esta ligado...');
  }
  acelerar(): void {
    console.log('Motor esta acelerando...');
  }
  parar(): void {
    console.log('Motor esta parado...');
  }
  desligar(): void {
    console.log('Motor esta desligado...');
  }
}

const carro = new Carro();
carro.acelerar();
carro.desligar();
carro.ligar();
carro.parar();

/*
Construtores privados

padrao de projeto -> GoF -> factory Method

objetivo -> quando chamar a classe, tentar instanciar essa classe, queremos que ela retorne a
instancia que ja temos dela(que ja foi criada anteriosmente no programa) ou quero que ela crie
a instancia caso nao tenha nenhuma criada
*/

export class Database {
  private static database: Database;

  private constructor(private host: string, private user: string, private password: string) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.password}, ${this.user}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia ja criada');
      return Database.database;
    }
    console.log('Criando instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost2', 'root2', '123456-2');
db2.connect();

const db3 = Database.getDatabase('localhost2', 'root2', '123456-2');
db3.connect();

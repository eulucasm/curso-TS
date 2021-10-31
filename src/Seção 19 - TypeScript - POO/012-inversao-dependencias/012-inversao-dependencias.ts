/*
Aula sobre inverção de dependencia
na aula anterior que usamos o exemplo do Escritor utilizando uma classe abstrata Ferramente
que por sua vez recebe dois duas classes, caneta e maquinaEscrever.
No exemplo poderiamos ter ligado diretamente o escritor as duas classes Caneta e MaquinaEscrever
porem usamos a Classe abstrata como ponte para essa ligação

no caso, nossa classe abstrata Ferramenta é um contrato oferecendo classes para serem usadas por outras classes
pense só, de Escritor estivesse ligado diretamente a classe Caneta, ficariamos dependentes, sem poder alterar
essa classe, mas quando usando um contrato de classe (ferramenta), fica muito mais facil alterar as classes ligadas
a esse contrato, diminuindo assim as chances de quebrar a aplicação

*/

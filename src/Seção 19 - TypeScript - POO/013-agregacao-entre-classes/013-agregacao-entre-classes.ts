/*
Agregação entre classes -> é um outro tipo de relação entre objetos.
nesse tipo de ligação, a relação é muito mais forte do que na associação
no exemplo da aula temos um CarrinhoDeCompras relacionado com Produtos
*/

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 49.9);
const produto2 = new Produto('bermuda', 39.9);
const produto3 = new Produto('camisola', 59.9);
const produto4 = new Produto('boné', 19.9);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());

// divListaProduto.insertAdjacentHTML('afterbegin', '');
 class Produto {
  constructor (nome, dataCadastrado, descricao, preco){
  this.nome = nome;
  this.dataCadastrado = dataCadastrado;
  this.descricao = descricao;
  this.preco = preco;
}
mostrarProdutos (){
  return this.nome + this.dataCadastrado + this.descricao + this.preco ;
}
}

const produto = new Produto("Chuteira", "05-02-1992", "CHUTEIRA FUTURE ULTIMATE CREATIVITY CAMPO", "R$1.399,90");
console.log(produto.mostrarProdutos())

class ProdutosDestaque extends Produto{
  constructor (nome, dataCadastrado, descricao,  preco, imagemDestaque){
    super(nome, dataCadastrado, descricao, preco, imagemDestaque)
    this.imagemDestaque = imagemDestaque;
  }
  mostrarProdutosDestaque (){
      return `
      <h1 class = "bela" >${this.nome}</h1>
      <h4> ${this.dataCadastrado}</h4>
      <img src="${this.imagemDestaque}" style="height: 250px"/>
      <p> ${this.descricao}</p>
      <p> ${this.preco}</p>
      ` 
   }
}   
const produtosDestaque = new ProdutosDestaque("Chuteira", "05-02-1992", "CHUTEIRA FUTURE ULTIMATE CREATIVITY CAMPO", "R$1.399,90", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/107323/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png");
const produtos = document.getElementById("produto-destaque")
produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
const listaProdutos = document.getElementById("lista-produtos")
listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarListaProdutos());
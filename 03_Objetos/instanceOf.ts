class Produto {
    private nome: string;
    private preco: number;
    constructor(name: string){
        this.nome = name;
    }

}

// InstaceOf vai verificar se um objeto é uma instancia de uma classe

const livro = new Produto("A Guerra dos Tronos");

console.log(livro instanceof Produto);

class Livro extends Produto{
    autor: string;
    constructor(nome: string, autor: string) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto{
    jogadores: number;
    constructor(nome: string, jogadores: number) {
        super(nome);
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string) {
    if(busca === "O Hobbit") {
        return new Livro("O Hobbit" ,"J. R. R. Tolkien")
    }

    if(busca === "Dark Souls") {
        return new Jogo("Dark Souls",1);
    }

    return null;
}

const produto = buscarProduto("O Hobbit");

if(produto instanceof Livro) {
    console.log(produto.autor)  
}

if(produto instanceof Jogo) {
    console.log(produto.jogadores)  
}

if(produto instanceof Produto) {
    
}
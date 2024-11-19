interface Produto {
    nome: string;
    preco: number;
    teclado: boolean;
}


function preencherDados(dados: Produto ) {
    document.body.innerHTML +=`
        <div>
            <h2>${dados.nome}</h2>
            <p>${dados.preco}</p>
            <p>Inclui teclado? ${dados.teclado ? 'sim' : 'não'}</p>
        </div>   
    `
}

const computador: Produto = {
    nome: 'Computador',
    preco: 2000,
    teclado: true
}

preencherDados(computador)

preencherDados({
    nome: 'Notebook',
    preco: 1000,
    teclado: false
})

// A palavra 'type' cria um tipo customizado

type NumberOrString = number | string;

let total3: NumberOrString = 20;

type Categorias = "design" | "codigo" | "descod";

function pintarCategoria(categoria: Categorias) {
    console.log(categoria)
}

pintarCategoria("descod")

// sempre que for objetos use Interface no lugar de Type

//exercicio

async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    const data = await response.json();
    showProduct(data);
}

interface Empresa{
    nome: string;
    fundacao: number;
    pais: string;
}


interface Data {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

fetchProduto();

function showProduct(data: Data) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>Nome da Empresa Fabricante: ${data.empresaFabricante.nome}</p>
        </div>
    `;
}
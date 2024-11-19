"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>${dados.preco}</p>
            <p>Inclui teclado? ${dados.teclado ? 'sim' : 'não'}</p>
        </div>   
    `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true
};
preencherDados(computador);
preencherDados({
    nome: 'Notebook',
    preco: 1000,
    teclado: false
});
let total3 = 20;
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria("descod");
// sempre que for objetos use Interface no lugar de Type
//exercicio
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduto();
function showProduct(data) {
    document.body.innerHTML = `
        <div>
            <h2>${data.nome}</h2>
            <p>Nome da Empresa Fabricante: ${data.empresaFabricante.nome}</p>
        </div>
    `;
}

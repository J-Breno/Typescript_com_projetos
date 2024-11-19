"use strict";
const produto = "Livro";
const preco = 200;
const carro = {
    marca: "Honda",
    portas: 4,
};
function somar(a, b) {
    return a + b;
}
// Exercicios 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// exercicio 2
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `Ganho Total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input)
    input.addEventListener("keyup", totalMudou);

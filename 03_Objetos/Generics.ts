function retorno<variavel>(a: variavel): variavel {
    return a;
}

const num = [1, 2,3 ,4, 5, 6, 7, 8, 9];
const frutas = ['Banana', "Pêra", "Uva", "Laranja", "Limão", "Maçã"
];

function firstFive<T>(lista: T[]): T[] {
    return lista.slice(0, 5);
}

function extractText<T extends HTMLElement>(el: T) {
    return el;
}
const numeros = [1, 2, 3, 4, 10, 23, 234]

function maiorQue10(data: number[]) {
    return data.filter(n => n > 10)
}

// exercicio 

async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json')
    const data = await response.json();
    mostrarCursos(data);
}

fetchCursos();


interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
}



const cursos = [
    
]

function mostrarCursos(cursos: Curso[]) {
    cursos.forEach(curso => {
        let color;
        if(curso.nivel === 'iniciante') {
            color = 'blue';
        } else if(curso.nivel === 'avancado') {
            color = 'red';
        }

        document.body.innerHTML += `
        <div>
            <h2 style="color: ${color}">${curso.nome}</h2>
            <p>Horas: ${curso.horas}</p>
        </div>
    `
    })
    
}

const arr = [
    {"nome": "Breno",
    "idade": 19
    },
    {
        "nome": "João",
        "idade": 20
    }
]

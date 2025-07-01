// Seleciona o formulário
const form = document.querySelector('form');

// Função para validar se é possível formar um triângulo
function validatriangulo(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Evento de submit do formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const ladoA = Number(document.getElementById('ladoA').value);
    const ladoB = Number(document.getElementById('ladoB').value);
    const ladoC = Number(document.getElementById('ladoC').value);

    let trianguloEquilatero = 'img/equilatero.png';
    let trianguloIsosceles = 'img/isosceles.png';
    let trianguloEscaleno = 'img/escaleno.png';

    // Esconde o card de informações e mostra o de resposta
    document.getElementById('card-info').classList.add('d-none');
    document.getElementById('card-resposta').classList.remove('d-none');

    let resultado = '';

    if (validatriangulo(ladoA, ladoB, ladoC)) {
            if (ladoA === ladoB && ladoB === ladoC) {
                document.getElementById('figura').src = trianguloEquilatero;
                resultado = '<span class="text-success">Triângulo Equilátero: É um triângulo que possui os **três lados iguais** e **três ângulos internos de 60°** cada. É totalmente simétrico. </span>';

            } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                document.getElementById('figura').src = trianguloIsosceles;
                resultado = '<span class="text-warning">Triângulo Isósceles: possui dois lados iguais e dois ângulos iguais</span>';

            } else {
                document.getElementById('figura').src = trianguloEscaleno;
                resultado = '<span class="text-info">Triângulo Escaleno: todos os lados e ângulos diferentes.</span>';
            }

    } else {
        resultado = '<span class="text-danger">Não é possível formar um triângulo com esses valores.</span>';
    }

    // Exibe o resultado no card de resposta
    let resultadoDiv = document.getElementById('resultado-triangulo');
    if (!resultadoDiv) {
        // Cria o elemento se não existir
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado-triangulo';
        const cardBody = document.querySelector('#card-resposta .card-body');
        cardBody.insertBefore(resultadoDiv, cardBody.querySelector('button'));
    }
    resultadoDiv.innerHTML = resultado;
});

// Função para voltar ao card de informações
function voltarInfo() {
    document.getElementById('card-info').classList.remove('d-none');
    document.getElementById('card-resposta').classList.add('d-none');
}
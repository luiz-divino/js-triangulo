
let form = document.querySelector('form');  //selecionando o formulario
let resp1 = document.querySelector('h2');   //selecionando o h3 que posteriormente receberá um valor e irá exibir a resposta
let resp2 = document.querySelector('h3');   //selecionando 0 h2 que posteriormente receberá um valor e irá exibir a resposta

form.addEventListener('submit', (e) => {  //funcao executada quando o formulario é enviado
    e.preventDefault();

    let ladoA = Number(form.ladoA.value);   //capitura valor do input LADO-A.
    let ladoB = Number(form.ladoB.value);   //capitura valor do input LADO-B.
    let ladoC = Number(form.ladoC.value);   //capitura valor do input LADO-C.

    if (validatriangulo(ladoA, ladoB, ladoC)) { //chamando a funcao somlados() e jogando os valores dos lados para a funcao, a mesma verifica a soma dos lados para obter a resposta e retornar se é possivel ou não criar o triângulo.
        condicao(ladoA, ladoB, ladoC)//chamando a funcao condica() e jogando os valores dos lados para a funcao pois não é possivel acessar diretamente as constantes do lado de fora do escopo que estão.
        const respBox = document.querySelector('#resp');
        respBox.classList.add('respostas', 'show-flip');

        // Remove o efeito após a animação para permitir novas animações
        setTimeout(() => respBox.classList.remove('show-flip'), 800);
    }
    else {
        resp1.innerHTML = 'ERRO: Não é possível formar um triângulo!';
        resp2.innerText = 'Lembre-se: A soma de dois lados deve ser sempre maior que o terceiro lado.';
    }
}
)



function condicao(valor1, valor2, valor3) { //funcao que verifica as condicoes, retornando um resultado caso a condicao seja válida
    if (valor1 === valor2 && valor2 === valor3) {
        resp1.innerHTML = '<img src="img/equilatero.png">'
        resp2.innerText = 'TIPO: TRIÂNGULO EQUILÁTERO';
    }
    if (valor1 === valor2 && valor2 != valor3) {
        resp1.innerHTML = '<img src="img/isosceles.png">'
        resp2.innerText = 'TIPO: TRIÂNGULO ISÓSCELES'
    }
    if (valor2 === valor3 && valor3 != valor1) {
        resp1.innerHTML = '<img src="img/isosceles.png">'
        resp2.innerText = 'TIPO: TRIÂNGULO ISÓSCELES'
    }
    if (valor1 === valor3 && valor1 != valor2) {
        resp1.innerHTML = '<img src="img/isosceles.png">'
        resp2.innerText = 'TIPO: TRIÂNGULO ISÓSCELES'
    }
    if (valor1 != valor2 && valor2 != valor3 && valor3 != valor1) {
        resp1.innerHTML = '<img src="img/escaleno.png">'
        resp2.innerText = 'TIPO: TRIÂNGULO ESCALENO'
    }
}


function validatriangulo(a, b, c) {/*parte lógica do código*/
    return a + b > c && a + c > b && b + c > a;
}
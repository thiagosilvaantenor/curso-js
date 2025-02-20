let contador = 0;
let res = document.querySelector('section#result');
// as variaveis declaradas aqui fora são consideradas globais e funcionam dentro do programa inteiro

function contar() {
    contador ++// é a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark> ${contador}</mark> cliques</p> `;
}

function zerar(){
    contador = 0;
    res.innerHTML = null;
}
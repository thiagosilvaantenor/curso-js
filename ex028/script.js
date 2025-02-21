//Crie um aplicativo em html5, css3 e js que calcule o valor do cambio quando uma pessoa for comprar dólares. Considere o cambio em 1.5% e o iof de 0,38%
function calcCambio(){
    // De reais para dolares
    let saida = document.getElementById('saida');
    
    let n = Number(document.getElementById('reais').value)
    
    let valCambio = Number(5.71)
    if (n >= valCambio){
        saida.innerHTML = `<p>O valor de cambio para R$${n}<br>Com cambio de 1 dolar = R$${valCambio}<br> Com taxa de cambio de: 1,5% e IOF de 0,38% será: </p>`
        
        // To-do: Tem que fazer uma regra de 3:
        // 1 dol == 5,71 reais 
        // n dol == x reais
        let nCambio = n * valCambio; 
        
        let result = (nCambio - (nCambio * 0.15)) - (nCambio * 0.038); 
        
        saida.innerHTML += `<p><strong>U$ ${result}</strong></p> `
    }

}
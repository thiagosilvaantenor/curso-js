//Crie um aplicativo em html5, css3 e js que calcule o valor do cambio quando uma pessoa for comprar dólares. Considere o cambio em 1.5% e o iof de 0,38%
function calcCambio(){
    // De reais para dolares
    let saida = document.getElementById('saida');
    
    let n = Number(document.getElementById('reais').value)
    
    let valCambio = Number(5.71)
    
        saida.innerHTML = `<p>O valor de cambio para R$${n}<br>Com cambio de 1 dolar = R$${valCambio}<br> Com taxa de cambio de: 1,5% e IOF de 0,38% será: </p>`
        
        // To-do: Tem que fazer uma regra de 3:
        // 5,71 == 1 dol
        // n == x dol
        //5,71x = 1*n
        //x = n / 5,71

        let taxa = n * 0.015
        saida.innerHTML += `<p>Valor deduzido da taxa de cambio = ${Number.parseFloat(taxa).toFixed(2)}</p>`
        let iof = n * 0.0038
        saida.innerHTML += `<p>Valor deduzido da taxa de IOF = ${Number.parseFloat(iof).toFixed(2)}</p>`
        let nCambio = n / valCambio; 
        saida.innerHTML += `<p> Valor em dolares: ${Number.parseFloat(nCambio).toFixed(2)}`
        let result = ( n - (taxa + iof)) / valCambio ; 
        saida.innerHTML += `<p>Valor após as deduções: <strong>U$ ${Number.parseFloat(result).toFixed(2)}</strong></p> `

}
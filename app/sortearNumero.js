const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
    
}
console.log(numeroSecreto)

const elementooMenorValor = document.getElementById('menor-valor')
elementooMenorValor.innerHTML = menorValor

const elementooMaiorValor = document.getElementById('maior-valor')
elementooMaiorValor.innerHTML = maiorValor
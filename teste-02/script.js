//Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
//além de informar a quantidade de vezes em que ela ocorre.


let palavra = 'Thiago Pereira dos Santos'

const letra = 'a'

let resultado = 0

for (let i = 0; i < palavra.length; i++) {
    if(palavra[i] === letra){
        resultado++
    }
    
}

console.log(resultado)
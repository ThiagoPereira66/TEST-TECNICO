//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let number = 10;

const number2 = number - 1

const soma = number2 + number


const resultado = () => {
    
    if( number2 === number - 1){
        console.log( 'esse numero pertence a sequencia Fibonacci')
    }
    else{
        console.log( 'esse numero NÃO pertence a sequencia Fibonacci')
    }
}

resultado()


console.log(soma)
console.log(resultado)
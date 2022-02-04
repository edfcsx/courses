//imprimindo uma funcao em uma variavel
const imprimirSoma = function(a,b){
    console.log(a + b);
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b) =>{
    return a+b
}

console.log(soma(5,3))

//retorno implicito - para funcoes com apenas uma linha 
const subtracao = (a, b) => a-b

console.log(subtracao(2, 3))

//retorno implicito de unico parametro
const imprimir = a => console.log(a)

imprimir('Eduardo Felipe')
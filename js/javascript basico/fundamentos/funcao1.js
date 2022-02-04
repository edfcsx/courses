//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//funcao com retorno
function soma(a,b = 0){
    return a+b
}
c = soma(10,20)
console.log(c)
console.log(soma(2,5))
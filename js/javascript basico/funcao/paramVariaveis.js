function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1.6,3,3.5,3.9))
console.log(soma('teste',111,'3'))

//arrow function

const soma = (a,b) => a+b
const multiplicacao = (a,b) => {
    return a*b
}

console.log(soma(2,3))
console.log(multiplicacao(2,3))

//arrow function (this)
//Na arrow function o this sempre irá apontar para o module exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//uma função normal sempre ira apontar para o contexto global e seu this pode ser mudado com funções como call e aply

//parametro padrao
function log(texto = 'Node'){
    console.log(texto)
}

log(null)

//operador rest
//o operador rest agrupa todos os parametros passados em uma função em um array
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))
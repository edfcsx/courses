/*
* O this fora da função ele aponta para o module.exports enquanto dentro de uma função ele aponta para o objeto global.
*/

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('dentro de uma funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)


}

logThis()

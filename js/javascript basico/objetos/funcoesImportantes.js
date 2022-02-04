const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega todas as chaves do objeto
console.log(Object.values(pessoa)) //pega todos os valores das chaves
console.log(Object.entries(pessoa)) //cria um array com as chaves e valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log('----------Usando o Destruct ----------')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
console.log('--------------------------------------')

Object.defineProperty(pessoa, 'dataNascimento', { //define as propriedades de um objeto
    enumerable: false, //ele ira ser mostrado na tela ? 
    writable: false, //o seu valor pode ser alterado ?
    value: '01/01/2020' //valor do campo
})

pessoa.dataNascimento = '01/02/1900'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object assig (ECMASCRIPT 2015)
//Ele ira concatenar todos os objetos colocando todos os atributos dos objetos o1 e o2 e vai inserir no objeto
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest, o1,o2);
console.log(obj)
Object.freeze(obj) // trava o valor recebedido do objeto
obj.c = 123
console.log(obj)
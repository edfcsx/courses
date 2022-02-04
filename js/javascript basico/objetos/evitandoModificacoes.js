//Object.preventExtensions
//ele fara com que não se consiga inserir novos atributos no objeto

const produto = Object.preventExtensions({
    nome:'caneta', preco:10, tag: 'escritorio'
})

console.log('Extensivel', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'nao vai conseguir ser inserido'
delete produto.tag
console.log(produto)

//O objeto pode ser alterado , deletado atributos porem não pode receber novos atributos

//Object.seal 
//ele sela o objeto não podendo nem inserir nem deletar atributos
const pessoa = {
    nome: 'Felipe',
    idade: 23
}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

//Object Freeze
//Ele congela o objeto não permitindo edições , inserir atributos ou remover atributos
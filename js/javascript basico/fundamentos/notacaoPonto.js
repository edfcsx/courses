/*
Geralmente a notação '.' e utilizada para acessar funcoes 
ou atributos dentro de objetos como o console que e um objeto
e existe a funcao log dentro do console.
*/

console.log(typeof console) //Objeto
console.log(typeof console.log) //Função

console.log(Math.ceil(6.2))

const obj = {}
obj.nome = 'Caneta'

console.log(obj.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('executando....')
    }
}

const obj2 = new Obj('cadeira')
console.log(obj2)
const obj3 = new Obj('Mesa')
console.log(obj3)

obj3.exec()
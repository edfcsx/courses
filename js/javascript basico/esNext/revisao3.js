//ES8 Object.values/Object.entries
//object values retorna os valores de um objeto e object entries retorna chave e valor
//keys retorna todas as chaves do objeto

const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = 'Carla'

const pessoa = {
    nome,
    ola(){
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Fala desgraca'
    }
}

console.log(new Cachorro().falar())
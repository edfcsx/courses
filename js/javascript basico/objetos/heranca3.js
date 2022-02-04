const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha = Object.create(pai)
filha.nome = 'Ana'

console.log(pai, filha, filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
filha2.nome = 'Carla';

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herança ${key}`)
}
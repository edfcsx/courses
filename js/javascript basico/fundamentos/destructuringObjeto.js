/* Esse operador extrai um atributo ou elemento de algum
armazenador como objetos, arrays.... 
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

/*
codigo abaixo:
essas chaves não representam um objeto mas sim o operador
destructuring.
assim sera criado duas variaveis com o mesmo nome que
existe no objeto
*/
const {nome,idade} = pessoa
console.log(nome,idade)

/*
Também e possivel atribuir esses valores a outras variaveis
fazendo da seguinte forma
*/

const {nome: n, idade:i} = pessoa
console.log(n,i)

//Outra forma de realizar a mesma coisa
const {logradouro: endereco,numero} = pessoa.endereco
console.log(endereco,numero)

//Atribuindo valor padrao caso não exista
const {sobrenome,bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)
//usando a notação literal
const obj1 = {}

//object em JS
const obj2 = new Object

//Funções Construtoras
function produto(nome,preco,desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new produto('Caneta', 7.99, 0.50)
const p2 = new produto('televisor', 1500, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('joao',1000,10)
console.log(f1.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Aline'
console.log(filha)

//Uma função famosa que retorna um objeto atraves de um json
const fromJSON = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJSON.info)


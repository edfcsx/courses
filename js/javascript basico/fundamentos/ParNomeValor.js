//par Nome/Valor
const saudacao = 'Opa' // Contexto Lexico1

function exec(){
    const saudacao = 'Fallaa' //contexto lexico 2
    return saudacao
}

//objetos são grupos aninhados de nome par valor

const cliente = {
    nome: 'Qerby',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Do bar',
        numero: 02
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


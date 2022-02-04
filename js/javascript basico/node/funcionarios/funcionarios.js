//o comando npm init , cria um arquivo json com todas as dependencias do projeto
//se for utilizado dessa forma npm init -y ele vai pular todas as perguntas colocando as repostas padrões

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func , funcAtual) => {
    return func.salario > funcAtual.salario ? func: funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)

})



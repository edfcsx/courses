const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const russos = funcionario => funcionario.pais ==='Russia'
const homens = funcionario => funcionario.genero === 'M'
const maiorSalario = (func , funcAtual) => {
    return func.salario > funcAtual.salario ? func: funcAtual
}
axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios.filter(russos).filter(homens).reduce(maiorSalario)
    console.log(func)
})
//sem promise

//Usando o metodo http nativo do node esse metodo não funciona com promises
const http = require('http')

//function responsavel por montar a url e fazer a callback
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //http.get ele ira pegar os dados , essa resposta retorna uma string de dados, assim temos de sempre concatenar todos os dados, os dados chegam de forma parcial
    http.get(url, res => {
        let resultado = ''
        //interceptando o evento de responta 
        res.on('data', dados => {
            resultado += dados
        })
        //interceptando o final da resposta quando a função completa todos os dados
        res.on('end', () => {
            //retornando a callback pegando o json e o transformando em um array de objetos
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []


//Callbacks aninhadas ou callback hell , tentar evitar o maximo disso
getTurma('A', alunos =>{
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        console.log(nomes)
    })
    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
        console.log(nomes)
    })
})
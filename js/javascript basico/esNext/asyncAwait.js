/*
*Iremos trabalhar essa em cima dessa promise onde é uma função assincrona , assim a tornando sincrona
*/
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch (e){
                    reject(e)
                }
            })

        })
    })
}

//recurso do ES8 - Objetivo de simplificar o uso de promises
//a função wait só ira funcionar dentro de uma função marcada como async

let obterAlunos = async() => {
    const turmaA = await(getTurma('A'))
    const turmaB = await(getTurma('B'))
    const turmaC = await(getTurma('C'))
    return [].concat(turmaA, turmaB, turmaC)
}
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => JSON.stringify(nomes))
    .then(array =>console.log(array))

    

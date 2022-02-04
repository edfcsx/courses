//Com promise

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

let nomes = []

//usando promises mas ainda de uma forma errada 

// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//         console.log(nomes)
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         console.log(nomes)
//     })
//     getTurma('C').then(alunos => {
//         nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//         console.log(nomes)
//     })
// })

//forma mais correta
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) //foi concatenado todos os array em um unico array
    .then(alunos => alunos.map(aluno => aluno.nome)) //foi criado um novo array apenas com os nomes dos alunos
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) //tratamento de erro
    
    getTurma('D').catch(e => console.log(e.message))
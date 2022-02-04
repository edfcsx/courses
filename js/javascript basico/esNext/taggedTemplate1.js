//taggedtemplate é a ideia de processar uma template string dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Jose'
const situacao = 'Aprovado'

console.log(tag`${aluno} está ${situacao}`)
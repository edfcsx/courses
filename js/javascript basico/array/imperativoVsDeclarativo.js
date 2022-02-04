const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Joao', nota: 9.2}
]

//imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(`Modo imperativo: As medias das notas foram ${total1/alunos.length}`)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(`Modo imperativo: as medias das notas foram ${total2/alunos.length}`)
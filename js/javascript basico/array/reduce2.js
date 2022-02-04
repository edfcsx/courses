const alunos = [
    {nome: 'joao', nota:7.3, bolsista: true},
    {nome: 'Maria', nota:9.3, bolsista: false},
    {nome: 'Pedro', nota:9.8, bolsista: true},
    {nome: 'Ana', nota:8.7, bolsista: true},
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2:algum aluno é bolsista ?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 
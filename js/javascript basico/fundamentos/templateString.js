const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
ola
${nome}!`

// ${} significa que isso sera uma expressao

console.log(concatenacao,template)

//expressoes..... 

console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase() // funcao

console.log(`Ei....${up('cuidado')}!`)
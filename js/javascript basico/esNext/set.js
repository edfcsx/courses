//set é uma estrutura de conjunto
//não aceita repetição 
//não indexa

const times = new Set()

times.add('Sport')
times.add('Salgueiro')
times.add('Salgueiro')
times.add('Bom Jardim')

console.log(times)
console.log(times.size)
console.log(times.has('Sport'))

//pode ser criado atraves de um array tbm
nomes = ['eduardo', 'paula', 'joca']

const pessoas = new Set(nomes)
console.log(pessoas)
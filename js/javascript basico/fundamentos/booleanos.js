let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //em booleano 1 true
console.log(!!isAtivo)

//!! força o resultado a se tornar booleano

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '))

let nome = 'Eduardo'
console.log(nome || 'Desconhecido')

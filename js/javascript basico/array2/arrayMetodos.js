const pilotos = ['vettel','Alonso','Massa','Rubinho']

pilotos.pop() //remove o ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um item na ultima posicao
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um elemento no primeiro indice do array
console.log(pilotos)

//splice pode adicionar ou remover elementos
pilotos.splice(2,0,'Bottas','Alguem ai')
console.log(pilotos)

pilotos.splice(2,2) //removendo dois elementos apos o indice 2
console.log(pilotos)

//metodo slice retorna um novo array apartir de outro array
const pilotos2 = pilotos.slice(2) //novo array gerado aprtir da posicao 2 do antigo array
console.log(pilotos2)
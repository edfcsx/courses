const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'massa']
pilotos.pop() //remove o ultimo item de um array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um item ao array
console.log(pilotos)

pilotos.shift(pilotos) //remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um item no primeiro indice de um array
console.log(pilotos)

//Adicionar item em determinado indice do array
pilotos.splice(2,0,'Bottas','Massa') // o 0 significa que não desejo remover ninguem
console.log(pilotos)

//remover elementos
pilotos.splice(3,1) //o 1 significa que desejo remover o elemento da posição 3 do array
console.log(pilotos)


//Slice , ele gera um novo array a partir do indice informado
const pilotos1 = pilotos.slice(2)
console.log(pilotos1)

//Slice pegando um intervalo de valores lembrando que ele nunca ira pegar o ultimo valor ex 1 ao 4 ele ira fazer 1 ao 3
const pilotos2 = pilotos.slice(1,4)
console.log(pilotos2)


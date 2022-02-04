console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia','carlos','felipe')
console.log(aprovados)

aprovados = ['bia','carlos','felipe']
console.log(aprovados[0])

console.log(aprovados)

//adicionando novo elemento
aprovados.push('sara')
console.log(aprovados)
console.log(aprovados.length)

//deletando itens de um array

delete aprovados[2]
console.log(aprovados)

//A funcao sort ordena um array

aprovados.sort()
console.log(aprovados)

//A funcao splice pode ser usada para excluir , adicionar ou alterar
aprovados = ['bia','carlos','ana']
aprovados.splice(1,2) //deletando o elemento ... apos o indice 1 deletar 2 elemento
aprovados.splice(1,2,'ELEMENTO 1', 'ELEMENTO 2') //adicionando elementos, apos o indice 1 adicionar 2 elementos
console.log(aprovados)
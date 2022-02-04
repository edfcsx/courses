//operador rest junta todos os itens em um array
//spead espalha todos os itens

//usar spread com objeto

const funcionario = {nome: 'maria', salario: 15000}
const clone = {ativo:true , ...funcionario} //colocando todos os objetos de funcionario dentro do objeto clone

console.log(clone)

//usar spread com array
const grupoA = ['joao','pedro','gloria']
const grupoB = ['maria', ...grupoA, 'rafaela']

console.log(grupoB)
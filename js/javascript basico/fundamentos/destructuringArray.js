/* Esse operador extrai um atributo ou elemento de algum
armazenador como objetos, arrays.... 

o operador para array é []
enquanto se usa {} em objetos
*/

const [a] = [10]
console.log(a)

const [n1,n3,n5,n6] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[,8,8],[9,6,8]]
console.log(nota)
/*
---------------HOISTING----------------------
No hoisting e feito o içamento de variaveis pelo interpretador 
toda variavel var ele faz um icamento colocando a no inicio sem
atribuir valor mas a declarando assim seu valor se torna undefined 
*/

//Codigo Normal
console.log('---Codigo Normal---')
console.log('a = ',a)
var a = 2
console.log('a = ',a)

//Hoisting usado pelo interpretador
console.log('---Codigo com Hoisting---')
var b
console.log('b = ',b)
b = 2
console.log('b = ',b)

/*
Esse conceito não acontece com as variaveis declaradas usando a 
palavra reservada LET.
*/
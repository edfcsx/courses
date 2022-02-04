const escola = 'cod3r'

console.log(escola.charAt(4)) //charArt retorna a letra na posição da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //pega o valor na tabela unicode
console.log(escola.indexOf('3')) // pega a posição do digito na string

console.log(escola.substring(1)) // ele ira imprimir a frase iniciando do valor definido
console.log(escola.substr(0,3)) // imprime um intervalo definido

console.log('Escola '.concat(escola).concat('!')) //concatenacao
console.log('Escola '+escola+'!') //outra forma de concatenacao
console.log(escola.replace('3','e')) // substitui determinado caractere
console.log(escola.replace(/\d/, 'e')) //substitui todos os digitos dentro do texto pela letra e
console.log(escola.replace(/\w/, 'e')) //substitui o primeiro digito ou letra dentro do texto pela letra e
console.log(escola.replace(/\w/g, 'e')) //substitui todos os digitos dentro do texto pela letra e G = global

console.log('ana,maria,jose,joca'.split(',')) //transforma em array



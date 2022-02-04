/*
exemplo de como executar o programa
node entradaEsaida.js -a

pode ser definida qualquer flag

std significa entrada e saida padrão no caso de um pc a entrada seria o teclado e a saida a tela
*/

const anonimo = process.argv.indexOf('-a') != -1

//funcao para imprimir no console
if(anonimo){
    process.stdout.write('Fala anonimo!\n')
    process.exit()
}else{
    process.stdout.write('informe o seu nome: ')
    process.stdin.on('data', data=> {
        const nome = data.toString().replace('\n','')
        process.stdout.write(`Fala ${nome}`)
        process.exit()
    })
}


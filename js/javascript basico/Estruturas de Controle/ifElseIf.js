Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    } else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Aluno em recuperação')
    }else if(nota.entre(0,3.99)){
        console.log('Aluno reprovado')
    }else{
        console.log('Valor da nota invalido')
    }

    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(2)
imprimirResultado(4.5)
imprimirResultado(11)


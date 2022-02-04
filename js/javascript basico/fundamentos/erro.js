function tratarErroELancar(erro){
    //throw new Error('Mensagem de erro....')
    throw 'Mensasgem'
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!')
    }catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('mensagem final')
    }
}

const obj = {name: 'roberto'}
imprimirNomeGritado(obj)
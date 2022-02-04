Array.prototype.foreach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['agatha','aldo','prefeito','ivy','daniel']

aprovados.foreach2(function(nome, indice){
    console.log(`${indice+1} ${nome}`)
})


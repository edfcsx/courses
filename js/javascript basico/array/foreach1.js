const aprovados = ['agatha','aldo','prefeito','ivy','daniel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
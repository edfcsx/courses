const aprovados = ['agatha','aldo','daniel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

exibirAprovados2 = (aprovado,indice) => console.log(`${aprovado} ${indice}`)
aprovados.forEach(exibirAprovados2)

aprovados.forEach(function(nome,indice,array){
    console.log('---------------------------')
    console.log(`${indice} ${nome} ${array}`)
})
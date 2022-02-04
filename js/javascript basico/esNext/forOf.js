/*
o for of é uma estrutura de repetição que pecorre em cima dos valores de um objeto 
*/

for(let letra of "cod3r"){
    console.log(letra)
}


const assuntosEcma = ['map','reduce','filter']

//o in percorre as chaves de um objeto
for (let i in assuntosEcma){
    console.log(i)
}

//enquanto o OF pecorre todos os valores do objeto
for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

//um metodo para percorrer somente as chaves
for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//um metodo para percorrer somente os valores
for(let chave of assuntosMap.values()){
    console.log(chave)
}

//um metodo para percorrer apenas as entradas
for(let [ch,vl] of assuntosMap){
    console.log(ch , vl)
}

//usando dentro de um set
const letras = new Set(['a','b','c'])
for(let i of letras){
    console.log(i)
}
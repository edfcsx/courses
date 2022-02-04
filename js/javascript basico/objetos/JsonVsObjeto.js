const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a+b+c
    }
}

jsonObjeto = JSON.stringify(obj)

console.log(JSON.stringify(jsonObjeto))
console.log(JSON.parse(jsonObjeto))
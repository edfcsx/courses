//1 estrategia para definir um valor padrão

function soma(a,b,c){
     a = a || 1
     b = b || 1
     c = c || 1
    return a + b + c
}

console.log(soma())
console.log(soma(3))

// 2,3 e 4 estrategia para gerar valor padrão

function soma1(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma1(),soma1(123,1,'teste'))

//Valor padrao que foi implementado no ECS6 , dessa forma que devera ser utilizado

function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma2(0,0,0))
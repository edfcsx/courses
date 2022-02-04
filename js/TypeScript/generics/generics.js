"use strict";
function echo(object) {
    return object;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ name: 'Joca', age: 37 }));
// Usando Generics
// O tipo sera definido tardiamento ao usar o generics
// o tipo passado no parametro será o tipo obtido como retorno
function upEcho(object) {
    return object;
}
console.log(upEcho('João').length);
console.log(upEcho(27));
console.log(upEcho({ name: 'Joca', age: 37 }).age);

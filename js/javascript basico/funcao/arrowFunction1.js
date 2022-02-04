//function normal
let dobro = function(a){
    return 2 * a
}

//arrow function
dobro = (a) =>{
    return 2 * a
}

//arrow function reduzida com return implicito
dobro = a => a * 2
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

//duas formas de escrever a mesma funcao

ola = () => 'Ola'
ola = _=> 'Ola' // o underline significa que existe um parametro mas que ele pode ser
//ignorado
//A variavel definida com var ele só possui 2 escopos possiveis
//dentro de uma funcao a variavel só podera ser usada dentro da função 
//porem se ela for criada fora de uma função seu escopo será global

{
     {
          {
               {
                    var sera = 'Seraaa ?' 
                    console.log(sera)
                }
            }
        }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)
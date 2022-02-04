/*
Promise é um objeto usado para processamento assíncrono. Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    }
    )}

    //o metodo then retorna uma promise

falarDepoisDe(3,'show!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
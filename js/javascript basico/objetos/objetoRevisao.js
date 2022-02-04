const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 21,
        endereco:{
            logradouro: 'Rua ABC',
            numero: '156'
        }
    },
    condutores: [{
        nome: 'Felipe',
        idade: 23
    }, {
        nome: 'Jessica',
        idade: 35
    }],
    calcularValorSeguro: function(){
        //......
    }
}

carro.modelo = 'Citroen C4 Pallace'
carro.proprietario.nome = 'Eduardo'
console.log(carro)
delete carro.condutores
console.log(carro)
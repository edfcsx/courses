const produtos = [
    {nome: "Notebook" , preco: '2899', fragil: true},
    {nome: "Ipad Pro" , preco: '1200', fragil: false},
    {nome: "Nokia" , preco: '50', fragil: false},
    {nome: "Copo de coca" , preco: '2.99', fragil: true}
]


const maiorque2500 = objeto => objeto.preco > 1000
const fragil = objeto => objeto.fragil == true

const resultado = produtos.filter(maiorque2500).filter(fragil)

console.log(resultado)
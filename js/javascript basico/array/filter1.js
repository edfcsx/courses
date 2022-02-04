const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},  
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)

/*
console.log(produtos.filter(function(p){
    return p.preco > 2400
}))
*/
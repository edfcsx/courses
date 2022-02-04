const carrinho = [
    '{"nome":"borracha", "preco": 3.45}',
    '{"nome":"Lapis", "preco": 13.45}',
    '{"nome":"Caderno", "preco": 9.45}',
    '{"nome":"Apagador", "preco": 23.45}'
]

//retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
let resultado = carrinho.map(paraObjeto)
                        .map(apenasPreco)


console.log(resultado)


const transformaJson = json => JSON.parse(json)
const apenasNome = objeto => objeto.nome
let resultado2 = carrinho.map(transformaJson).map(apenasNome)

console.log(resultado2)
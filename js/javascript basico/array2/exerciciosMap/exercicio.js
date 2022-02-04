const dados = [
'{"id":"bread-bakery","name":"Bread & Bakery","category":"Bakery","deliveryEstimate":"25m","rating":4.9}'];


const paraObjeto = json => JSON.parse(json)
const id = restaurante => restaurante.id

result = dados.map(paraObjeto).map(id)

console.log(result)
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//utilizando o modulo http
const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia');
    res.end()
}).listen(6565);

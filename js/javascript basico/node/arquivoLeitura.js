const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono....
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo + 'Sincrono')
console.log('---------------------')
//assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}, ${config.db.port}, ${config.db.user}, ${config.db.pass} ASSINCRONO`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta')
    console.log(arquivos)
})
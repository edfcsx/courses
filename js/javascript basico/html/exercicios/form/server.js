const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req,resp) => {
    console.log(req.body) //para dados submetidos via post
    //console.log(req.query) para dadps submetidos via get
    resp.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req,resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>carregou pelo id</h1>')
})

app.listen(3003)
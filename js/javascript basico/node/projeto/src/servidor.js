const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req , res, next) => {
    res.send(bancoDeDados.getProdutos())
    app.listen(()=> {
        console.log('Request: [200] Foi solicitado o json com todos os produtos')
    })
})

app.get('/produtos/:id', (req , res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    app.listen(()=>{
        console.log(`Request: [200] Foi solicitado o json do produto de id: ${req.params.id}`)
    })
})

app.post('/produtos', (req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //ele gera um json
    app.listen(()=>{
        console.log(`Request: [200] Produto criado com sucesso nome: ${req.body.nome} - preco: ${req.body.preco}`)
    })
})

app.put('/produtos/:id', (req,res,next)=> {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
    app.listen(()=>{
        console.log(`Request: [200] Produto editado com sucesso id: ${req.params.id}`)
    })
})

app.delete('/produtos/:id', (req,res,next)=>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
    app.listen(()=>{
        console.log(`Request: [200] Produto apagado com sucesso id: ${req.params.id}`)
    })
})

app.listen(porta, () => {
    console.log('==========Manga Informática==========')
    console.log('API : www.mangainformática.com.br')
    console.log('Version: 1.0 BETA')
    console.log('Eduardo Cipriano')
    console.log(`Servidor executando na porta ${porta}`)
})
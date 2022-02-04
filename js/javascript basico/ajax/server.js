const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/*
*Com Esse comando estamos informando que ele irá servir todos os arquivos estaticos que
*encontram-se disponiveis na pasta
*/
app.use(express.static('.'))

//PS : Esses dois middleware irão servir todos os arquivos caso fosse apenas um unico
//arquivo poderia ser escrito assim:
//app.use('/url',bodyParser.urlencoded({extended: true}))
//Codigo para receber os dados passados atraves da html
app.use(bodyParser.urlencoded({extended: true}))
//codigo responsavel por transformar os json em objetos
app.use(bodyParser.json())

//Rota criada para o teste do servidor
app.get('/test', (req, res) => res.send(new Date))


//Rotina de upload
const multer = require('multer')

/*
No multer na função diskStorage é passado um objeto onde através dele é possivel configurar
varias ações que irão ocorrer quando for feito o upload de objetos
*/
const storage = multer.diskStorage({
    destination: function(req, file, callback){ //destino do arquivo
        callback(null,'./upload') // o '.' significa que o arquivo de upload será armazenado na pasta atual
    },
    filename: function(req,file,callback){ //Nome do arquivo
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo') //informando qual o nome do campo do input que irá
//conter o arquivo

app.post('/upload', (req, res) => { //requisição via post e URL
    upload(req,res,err => { //função middleware que recebe o request e response
        if(err){
            return res.send('Ocorreu um erro')
        }
        res.end('concluido com sucesso')
    })
})

app.post('/formulario', (req,res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req,res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send(par ? 'par' : 'impar')
})


//dando start no servidor
app.listen(8080, () => console.log('Executando servidor....'))
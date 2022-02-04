const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas


//o bind e um metodo responsavel por amarrar um determinado objeto
//sempre que o metodo for chamar um objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' //não faça isso, pois vai impactar em toda a aplicação

const avo = {
    attr1: 'a'
}

const pai = {
    __proto__:avo,
    attr2: 'b',
    attr3: 'sombreamento'
}

const filho = {
    __proto__:pai,
    attr3: 'c'
}

console.log(filho.attr0, filho.attr3, filho.attr2, filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+=delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //o super ira chamar o metodo do prototitpo
    }
}

Object.setPrototypeOf(ferrari,carro) //estabelece uma relação de prototipo entre dois objetos
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
ferrari.acelerarMais(300)

console.log(ferrari.status())
console.log(volvo.status())


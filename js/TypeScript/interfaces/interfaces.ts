interface Human {
  name: string;
  age?: number;
  [prop: string]: any;
  salute(secondName: string): void;
}

function saysHello(people: Human) {
  console.log(`Hello!! ${people.name}`)
}

function changeName(people: Human) {
  people.name = 'Joca';
}

const people1: Human = {
  name: 'José',
  age: 24,
  xyz: true,
  salute(secondName: string) {
    console.log(`My name is ${this.name} ${secondName}`)
  },
}

saysHello(people1);
people1.salute('Cipriano');
changeName(people1)
saysHello(people1);

// Use Class
class Client implements Human {
  public name: string = '';

  salute = (secondName: string) => console.log(`My name is ${this.name} ${secondName}`);
}

const clientOne = new Client();
clientOne.name = 'Han';
clientOne.salute('Solo');

// Interface Function

interface CalcFunction {
    (a: number, b: number): number
}

let pow: CalcFunction

pow = (base: number, exp: number): number => Math.pow(base, exp);

console.log(pow(3, 3));

// Herança

//Tabela de relações
// Classe -> Interface = Implements
// Classe -> Classe = Extends
// Interface -> Interface = extends

// Quando a relação for entre classes se usa a palavra reservada extends
// quando a relação for entre classes e interface ou interface com interface se usa a palavra reservada implements

interface A {
    a():void;
}

interface B {
    b():void;
}

interface ABC extends A, B {
    c():void;
}

class RealA implements A {
    a():void{};
}

class RealB implements A, B {
    a():void{};
    b():void{};
}

class RealC implements ABC {
    a(): void {};
    b(): void {};
    c(): void {};
}

function teste(b: B) {

}

abstract class AbstractedABD implements A, B {
    a():void{};
    b():void{};
    abstract d(): void;
}

teste(new RealC)

// Extends Object

interface Object {
    log():void;
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
    nome: 'Pedro',
    toString() {
        return  this.nome
    }
}

cli.log()

// Generics Array 
const evaluations: Array<number> = [10, 9.3, 7.7];
evaluations.push(8.4); 
// evaluations.push('5.5'); 
console.log(evaluations);

function print<T>(args: T[]) { 
  args.forEach(element => console.log(element))
}

print([1, 2, 3]) 
print<number>([4, 5]) 
print<string>(['Ana', 'Bia', 'Carlos']) 
print<{ name: string, age: number}>([
  { name: 'Felipe', age: 24 },
  { name: 'Eduardo', age: 25} 
])

type Student = { name: string, age: number }
print<Student>([
  { name: 'Felipe', age: 24 },
  { name: 'Eduardo', age: 25}
])

// class with generics

abstract class BinaryOperation<T, R> {
  constructor(public operation1: T, public operation2: T) {

  }
  abstract execute(): R
}

// console.log(new BinaryOperation('Bom', 'Dia').execute());
// console.log(new BinaryOperation(2, 5).execute());
// console.log(new BinaryOperation('bom', 3).execute());
// console.log(new BinaryOperation({}, {}).execute());

class SumBinary extends BinaryOperation<number, number> {
  execute(): number {
    return this.operation1 + this.operation2
  }
}

console.log(new SumBinary(3, 4).execute())
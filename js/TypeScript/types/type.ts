// String
let nome = 'Felipe';
// nome = 28;
console.log(nome);

//Numbers
let idade = 24;
// idade = '27.5';
console.log(idade);

//Boolean
let haveHobbies = false;
// haveHobbies = 1;
console.log(haveHobbies);

// Explicit types
let myAge: any;
myAge = 27;
console.log(typeof myAge);
myAge = 'My years old is 27';
console.log(typeof myAge);

//Array
let hobbies: any[] = ['Cozen', 'Making a coffe'];

console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100]

console.log(hobbies);

//Tuples
let address: [string, number, string] = ['Av Principal', 99, 'Bloco C'];
console.log(address);


//Enums
enum Color {
  Green, //Value 0
  Blue = 100, // apply value
  Red, // after value + 1 = 101
}

let myColor: Color = Color.Blue;

console.log(myColor);
console.log(Color);

//Any Type
let car: any = 'Porsche';
console.log(car);
car = { mark: 'BWM', year: 2019 };
console.log(car);

// Functions
function returnMyName(): string {
  return nome;
}

function saysHello(): void {
  console.log('Hello!');
}

function multiple(a: number, b: number): number {
  return a * b;
}

console.log(returnMyName());
saysHello();
console.log(multiple(2, 2.8));

// Function type
let people;
people = saysHello;
people();

let calc: (a: number, b: number) => number = multiple;
console.log(calc(3, 3));

// Objects
let user: { name: string, age: number} = {
  name: 'Felipe',
  age: 24,
}

console.log(user);

let employee: {
  managers: string[],
  hitPoint: (hour: number) => string
} = {
  managers: ['Ana', 'Fernando'],
  hitPoint(hour: number): string {
    if (hour <= 8) return 'normal pointer';
    return 'excedded pointer';
  }
}

console.log(employee.hitPoint(9));

// Aliases Types

function hitPoint(hour: number): string {
  if (hour <= 8) {
    return 'Normal Pointer';
  }
  return 'Excedded Pointer';
}

type Employee = {
  managers: string[],
  hitPoint: (hour: number) => string,
};

let employee2: Employee = {
  managers: ['José', 'Conde'], 
  hitPoint
}

let employee3: Employee = {
  managers: ['Wagner', 'Ramalho'], 
  hitPoint
}

console.log(employee2.hitPoint(10));
console.log(employee3.hitPoint(5));

// Union types
let note: number | string = 10;
console.log(`my note is ${note}`);
note = '10';
console.log(`my note is ${note}`);

// Never
function error(msg: string): never {
  throw new Error(msg);
}

const product = {
  name: 'Sabão',
  price: 10,
  validateProduct() {
    if (!this.name || this.name.trim().length === 0) {
      error('Name is necessary');
    }
    if (this.price <= 0) {
      error('Price invalid!');
    }
  }
}

product.validateProduct();

// Null
let height = 12;
// height = null;

let opcionalHeight: null | number = 12;
opcionalHeight = null;

type Contact = {
  name: string,
  phone1: string,
  phone2: string | null,
}

let contact1: Contact = {
  name: 'Felipe',
  phone1: '81 998030671',
  phone2: null,
}
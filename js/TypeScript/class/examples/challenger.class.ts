// Exercício 1 - Classe
class Moto {
  constructor (public nome: string, public speed: number = 0) {}

  honk = ():string => `Toooot`;

  speedUp = (value: number):number => this.speed += value;
}

const moto1: Moto = new Moto('Honda Biz');
moto1.speedUp(10);
console.log(moto1.honk());

// Exercício 2 - Herança
abstract class object2D {
  constructor (protected base: number = 0, protected height: number = 0) {}
  abstract area(): void
}

class Rectangle extends object2D {
  area = ():number => this.base * this.height;
}

const rec = new Rectangle(4, 3);
console.log(rec.area());

// Exercício 3 - Getters & Setters
class Trainee {
  constructor(private _firstname: string = '') {}
  
  set firstname(name: string) {
    if (name.length > 3) {
      this._firstname = name;
    } else {
      this.firstname = '';
    }
  }

  get firstname() {
    return this._firstname;
  }
}

const trainee1 = new Trainee;
trainee1.firstname = 'Joca';
console.log(trainee1.firstname);
class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1994) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const brithDay = new Data(5, 9, 1994);
console.log(brithDay.day);

class DataX {
  constructor(public dia: number = 1, public month :number = 1, public year: number = 1970) {}
}


class Car {
  private currentSpeed: number = 0;
  
  constructor(
    private brand: string,
    private model: string,
    private maximumSpeed: number = 200,
  ) {}

  protected changeSpeed = (delta: number): void => {
    const newSpeed = this.currentSpeed + delta
    const validateSpeed = newSpeed >=0 && newSpeed <= this.maximumSpeed

    if (validateSpeed) {
      this.currentSpeed = newSpeed
    } else {
      this.currentSpeed = delta > 0 ? this.maximumSpeed : 0
    }
  }

  public speedUp = (): void => this.changeSpeed(5);
  public break = (): void => this.changeSpeed(-5);
  public showSpeed = (): string => `Car: ${this.model} - ${this.brand}, Speed is ${this.currentSpeed} Km/h`
}

const audiCar = new Car('Audi', 'TT');

for (let i = 100; i > 0; i--) {
  const random = (Math.random() * 100);
  if (random <= 50) {
    audiCar.break();
  } else {
    audiCar.speedUp();
  }
}

console.log(audiCar.showSpeed());

class Ferrari extends Car {

  constructor(model: string, maximumSpeed: number) {
    super('Ferrari', model, maximumSpeed)
  }

  public speedUp = (): void => this.changeSpeed(20);
  public break = (): void => this.changeSpeed(-15);
}

const ferrari = new Ferrari('F40', 324);

for (let i = 100; i > 0; i--) {
  const random = (Math.random() * 100);
  if (random <= 30) {
    ferrari.break();
  } else {
    ferrari.speedUp();
  }
}

console.log(ferrari.showSpeed());

// Getters and Setters
class People {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >=0 && value <= 120) {
      this._age = value;
    }
  }

}

const peopleX = new People
peopleX.age = 12
console.log(peopleX)

peopleX.age = -15
console.log(peopleX)

// Static Attributes and Methods
 
class Mathematic {
  static PI: number = 3.1416;

  static circArea(radius: number) {
    return Mathematic.PI * radius * radius
  }
}

console.log(Mathematic.circArea(4));

// Readonly attributes

class Airplane {
  constructor(public readonly model: string, public prefix: string) {}
}

const airplane = new Airplane('Super Tucano', 'Tucan');
// airplane.model = ''
console.log(airplane);
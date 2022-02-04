class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }

  hello() {
    console.log(`${this.sound} I'm a ${this.kind}!`);
  }

  static info() {
    console.log('This is a class create animals!');
  }

  // eslint-disable-next-line class-methods-use-this
  get name() {
    // eslint-disable-next-line no-console
    return console.log('My name is Felipe');
  }

  set nickname(nick) {
    this.nick = nick;
  }
}

class Fly extends Animal {
  constructor(kind, sound) {
    super(kind, sound);
    this.kind = kind;
    this.sound = sound;
  }

  // eslint-disable-next-line class-methods-use-this
  fly() {
    console.log('I believe fly');
  }
}

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'meow');
const bird = new Fly('bird', 'pru pru');

dog.hello();
cat.hello();
Animal.info();
// eslint-disable-next-line no-unused-expressions
dog.name;
bird.fly();

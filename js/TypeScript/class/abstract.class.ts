abstract class Calc {
  protected result: number = 0

  abstract execute(...numbers: number[]): void

  showResult(): number {
    return this.result;
  }
}

class Sum extends Calc {
   execute(...numbers: number[]): void {
     this.result = numbers.reduce((t, a) => t + a)
   }
}

class Multiple extends Calc {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t * a)
  }
}

const calc1: Calc = new Sum()
calc1.execute(1, 5, 10, 8, 90);
console.log(calc1.showResult());

const calc2 = new Multiple()
calc2.execute(1.5, 9, 8.9)
console.log(calc2.showResult());

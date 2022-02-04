class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0, 
  ) {}

  public resume = ():string => {
    if (this.discount > 0) {
      const price = this.priceWithDescount();
      return `Product: ${this.name}, price is R$ ${this.price}, have a (${this.discount * 100}%) off, final price is ${price}`
    } else {
      return `Product: ${this.name}, price is R$ ${this.price}`;
    }
  }

  private priceWithDescount = ():number => {
    return this.price - (this.price * this.discount);
  }
}

const productX = new Product('Arroz', 5);
const productY = new Product('Salsicha', 10, 0.2);

console.log(productX.resume());
console.log(productY.resume());
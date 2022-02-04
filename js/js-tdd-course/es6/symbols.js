// O symbol é imutavel e também é unico não podendo existir mais de um

const foo = Symbol('name');
const bar = Symbol('name');

console.log(foo);
console.log(bar);

const obj = {
  [Symbol('name')]: 'Eduardo',
  [Symbol('age')]: 24,
  city: 'Recife',
};

console.log(obj);

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);

const data = symbols.map(sym => obj[sym]);
console.log(data);

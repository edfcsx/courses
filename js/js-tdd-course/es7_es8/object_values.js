const animals = {
  camel: 3,
  alpaca: 2,
  lhama: 5,
};

console.log('Total of animals:', Object.values(animals).reduce((a, b) => a + b));

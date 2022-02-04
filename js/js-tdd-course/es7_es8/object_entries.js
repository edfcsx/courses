const animals = {
  camel: 3,
  lhama: 2,
  alpaca: 5,
};

const animalsMap = new Map(Object.entries(animals));

console.log(animalsMap);

console.log(animalsMap.size);
console.log(animalsMap.has('llama'));
console.log(animalsMap.has('lion'));
console.log(animalsMap.get('alpaca'));

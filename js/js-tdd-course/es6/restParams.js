function multiply(mult, ...args) {
  return args.map(arg => arg * mult);
}

console.log(multiply(2, 1, 3, 4, 5));

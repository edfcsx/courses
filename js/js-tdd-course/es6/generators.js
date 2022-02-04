function* genNames() {
  yield 'Willian';
  yield 'Felipe';
  yield 'text';
}

const names = genNames();

console.log(names);
console.log(names.next());

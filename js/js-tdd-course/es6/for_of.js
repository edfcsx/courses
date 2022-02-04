// iterator
// iterable

const text = 'Recife'; // iterable
const it = text[Symbol.iterator](); // iterator

console.log(it.next());

// eslint-disable-next-line no-restricted-syntax

for (letter of text) {
  console.log(letter);
  if (letter === 'c') break;
}

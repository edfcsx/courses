const data = [
  {
    name: 'Eduardo',
    age: 24,
    city: 'Recife',
  },
  {
    name: 'Felipe',
    age: 24,
    city: 'Recife',
  },
];

const eduardo = data.find(person => person.name === 'Eduardo');
const felipe = data.findIndex(person => person.name === 'Felipe');

console.log(eduardo);
console.log(felipe);

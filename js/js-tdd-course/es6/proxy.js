const obj = {
  name: 'Eduardo',
  age: 24,
};

const proxy = new Proxy(obj, {
  get(target, name) {
    console.log('Alguém está solicitando o nome');
    return target[name];
  },
  set(target, name, value) {
    console.log('Alguém está querendo mudar o nome');
    // eslint-disable-next-line no-param-reassign
    target[name] = value.toUpperCase();
  },
});

// eslint-disable-next-line no-unused-expressions
proxy.name;
proxy.name = 'Felipe';
// eslint-disable-next-line no-unused-expressions
proxy.name;

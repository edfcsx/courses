const fetch = require('node-fetch');

function ajax(url) {
  fetch(url)
    .then(data => data.json())
    // eslint-disable-next-line no-use-before-define
    .then(data => dados.next(data));
}

function* ajaxGen() {
  console.log('buscando posts....');
  const posts = yield ajax('https://willianjusten.com.br/search.json');
  console.log(posts);

  console.log('Buscando github.....');
  const git = yield ajax('https://api.github.com/users/edfcsx');
  console.log(git);
}

const dados = ajaxGen();
dados.next();

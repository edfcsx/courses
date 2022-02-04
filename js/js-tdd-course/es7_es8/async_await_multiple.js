const fetch = require('node-fetch');

async function getUsers(users) {
  const promises = users.map(user => fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json()));

  const gitUsers = await Promise.all(promises);
  console.log(gitUsers.map(p => p.name));
}

getUsers(['edfcsx', 'willianjusten']);

const posts = fetch('https://willianjusten.com.br/search.json');

posts.then(data => data.json())
  .then(data => console.log(data));

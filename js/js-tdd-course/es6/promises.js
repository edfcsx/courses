const defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Hello its Works');
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('canceled');
    }
  }, 2000);
});

defer
  .then((data) => {
    console.log(data);
    return 'foo';
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));

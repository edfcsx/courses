const currency = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ currency: 'euro', value: 3.50 });
  }, 2000);
});

const countries = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['Brazil', 'England', 'China']);
  });
});

Promise.all([currency, countries])
  .then(response => console.log(response));

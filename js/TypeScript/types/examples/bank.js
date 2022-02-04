"use strict";
var Client1 = {
    name: 'Felipe',
    contact: ['81 998030671', '81 997346277'],
    account: {
        balance: 1000,
        deposit: function (value) {
            this.balance += value;
        },
        checkBalance: function () {
            return "You balance is " + this.balance;
        }
    }
};
console.log(Client1);
console.log('------------');
console.log(Client1.account.checkBalance());
Client1.account.deposit(500);
console.log(Client1.account.checkBalance());
console.log('------------');
console.log(Client1);

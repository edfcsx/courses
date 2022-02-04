type Client = {
  name: string,
  contact: string[],
  account: CheckingAccount,
}

type CheckingAccount = {
  balance: number,
  deposit: (value: number) => void,
  checkBalance: () => string,
}

const Client1: Client = {
  name: 'Felipe',
  contact: ['81 998030671', '81 997346277'],
  account: {
    balance: 1000,
    deposit(value: number): void {
      this.balance += value;
    },
    checkBalance(): string {
      return `You balance is ${this.balance}`;
    }
  }
}

console.log(Client1);
console.log('------------');
console.log(Client1.account.checkBalance());
Client1.account.deposit(500);
console.log(Client1.account.checkBalance());
console.log('------------');
console.log(Client1);
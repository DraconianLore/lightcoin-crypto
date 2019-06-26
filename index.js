
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let total = 0;
    this.transactions.forEach(transaction => {
      total += transaction.value;
    });
    return total;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
class Transaction {
  
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  get isAllowed() {
    if (this.account.balance + this.value < 0) {
      return false;
    }
    return true;
  }

  commit() {
    if (this.isAllowed) {
      this.time = new Date();
      this.account.addTransaction(this);
    }
  }
}
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}
class Deposit extends Transaction {
  
  get value() {
    return this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");



t1 = new Withdrawal(50.25, myAccount);
t1.commit();
t2 = new Withdrawal(9.99, myAccount);
t2.commit();
t3 = new Deposit(120.00, myAccount);
t3.commit();
t4 = new Withdrawal(999.99, myAccount);
t4.commit();
console.log('Balance:', myAccount.balance);

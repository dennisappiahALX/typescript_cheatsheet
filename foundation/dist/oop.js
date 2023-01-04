"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id,
            this.owner = owner,
            this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Inavalid amount');
        this.balance += amount;
    }
}
let account = new Account(1, "Dennis", 3000);
account.deposit(400);
console.log(account.balance);
console.log(account instanceof Account);

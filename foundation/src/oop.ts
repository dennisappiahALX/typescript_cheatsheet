class Account {
    nickname? : string

    
    // initializing parameter properties 
    constructor (
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {  
    }

    deposit (amount: number) : void {
        if (amount <= 0) 
          throw new Error('Inavalid amount')
        this._balance += amount
    }

    // Getter
    getBalance () : number {
        return this._balance;
    }

    setBalance (value: number) {
        if (value < 0) 
            throw new Error('Balance cannot be less than zero');
        this._balance = value
    }

}

let account = new Account(1, "Dennis", 3000)

console.log(account instanceof Account)
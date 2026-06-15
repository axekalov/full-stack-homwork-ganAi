class ATM {
 
  static totalTransactions = 0;

  constructor(bankName, initialBalance) {
    this.bankName = bankName;
    this.balance = initialBalance; 
  }

  #verifyPin(pin) {
    if (pin === 1234) {
      return true;
    } else {
      console.log("Wrong PIN");
      return false;
    }
  }

  
  #updateBalance(amount) {
    this.balance -= amount;
  }


  #printReceipt(amount) {
    console.log(`Receipt: withdrew ${amount}. Remaining: ${this.balance}`);
  }

 
  withdraw(pin, amount) {
    
    if (this.#verifyPin(pin) === false) {
      return; 
    }

    
    if (this.balance < amount) {
      console.log("Insufficient funds");
      return;
    }

    this.#updateBalance(amount);
    this.#printReceipt(amount);
    ATM.totalTransactions++;
  }
}
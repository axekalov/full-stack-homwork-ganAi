function BankTransfer(ownerName, iban) {
  PaymentMethod.apply(this, [ownerName]);
  this.iban = iban;
}

BankTransfer.prototype = Object.create(PaymentMethod.prototype);
BankTransfer.prototype.constructor = BankTransfer;

BankTransfer.prototype.pay = function(amount) {
  console.log("Transferring " + amount + " NIS from IBAN " + this.iban);
};
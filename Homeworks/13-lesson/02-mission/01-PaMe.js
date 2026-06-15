function PaymentMethod(ownerName) {
  this.ownerName = ownerName;
}

PaymentMethod.prototype.pay = function(amount) {
  console.log("pay() not implemented");
};

PaymentMethod.prototype.receipt = function(amount) {
  this.pay(amount);  
  console.log("Receipt sent to " + this.ownerName);
};
function PayPal(ownerName, email) {
  PaymentMethod.apply(this, [ownerName]);
  this.email = email;
}

PayPal.prototype = Object.create(PaymentMethod.prototype);
PayPal.prototype.constructor = PayPal;

PayPal.prototype.pay = function(amount) {
  console.log("Sending " + amount + " NIS via PayPal to " + this.email);
};
function CreditCard(ownerName, cardNumber) {
  PaymentMethod.apply(this, [ownerName]);
  this.cardNumber = cardNumber;
}

CreditCard.prototype = Object.create(PaymentMethod.prototype);
CreditCard.prototype.constructor = CreditCard;

CreditCard.prototype.pay = function(amount) {
  const last4 = this.cardNumber.slice(-4);
  console.log("Charging " + amount + " NIS to card ending in " + last4);
};
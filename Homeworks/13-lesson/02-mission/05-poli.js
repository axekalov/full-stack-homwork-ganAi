const myCard = new CreditCard("Yossi", "4580123456789012");
const myPayPal = new PayPal("Moshe", "moshe@example.com");
const myBank = new BankTransfer("David", "IL123456789");

const paymentsArray = [myCard, myPayPal, myBank];

for (let i = 0; i < paymentsArray.length; i++) {
  paymentsArray[i].receipt(500);
  console.log("----------------------"); }
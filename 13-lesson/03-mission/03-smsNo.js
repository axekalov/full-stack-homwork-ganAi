function SMSNotification(sender, message, phone) {
  Notification.apply(this, [sender, message]);
  this.phone = phone;
}

SMSNotification.prototype = Object.create(Notification.prototype);
SMSNotification.prototype.constructor = SMSNotification;

SMSNotification.prototype.send = function() {
  console.log("SMS to " + this.phone + ": " + this.message);
};
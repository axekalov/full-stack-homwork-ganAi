function EmailNotification(sender, message, toEmail) {
  Notification.apply(this, [sender, message]);
  this.toEmail = toEmail;
}

EmailNotification.prototype = Object.create(Notification.prototype);
EmailNotification.prototype.constructor = EmailNotification;

EmailNotification.prototype.send = function() {
  console.log("Email to " + this.toEmail + ": " + this.message);
};
function Notification(sender, message) {
  this.sender = sender;
  this.message = message;
  this.sent = false; 
}

Notification.prototype.send = function() {
  console.log("send() not implemented");
};

Notification.prototype.log = function() {
  this.send();       
  this.sent = true;  
  console.log("[LOG] notification from " + this.sender + " sent: " + this.sent);
};
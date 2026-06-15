function PushNotification(sender, message, deviceId) {
  Notification.apply(this, [sender, message]);
  this.deviceId = deviceId;
}

PushNotification.prototype = Object.create(Notification.prototype);
PushNotification.prototype.constructor = PushNotification;

PushNotification.prototype.send = function() {
  console.log("Push to device " + this.deviceId + ": " + this.message);
};
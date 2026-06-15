const mailAlert = new EmailNotification("System", "Welcome to our site!", "user@example.com");
const smsAlert = new SMSNotification("Bank", "Your code is 1234", "050-1234567");
const pushAlert = new PushNotification("Game", "Your turn to play!", "Device_889");

const allNotifications = [mailAlert, smsAlert, pushAlert];

for (let i = 0; i < allNotifications.length; i++) {
  allNotifications[i].log();
  console.log("----------------------");
}


const sentNotifications = allNotifications.filter(function(notif) {
  return notif.sent === true;
});

console.log("Total successfully sent: " + sentNotifications.length);
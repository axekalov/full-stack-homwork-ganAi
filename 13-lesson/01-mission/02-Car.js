function Car(brand, speed, doors) {
 Vehicle.apply(this, [brand, speed]); 
  this.doors = doors;
}

// העתקת ארגז הכלים (הפונקציות) של Vehicle
Car.prototype = Object.create(Vehicle.prototype);
// תיקון תעודת הזהות כדי שהמכונית תזכור שהיא Car ולא Vehicle
Car.prototype.constructor = Car;

Car.prototype.openTrunk = function() {
  console.log(this.brand + " trunk is open");
};
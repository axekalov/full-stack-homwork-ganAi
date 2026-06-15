function Vehicle(brand, speed) {
  this.brand = brand;
  this.speed = speed;
  this.running = false;
}

Vehicle.prototype.start = function() {
  this.running = true;
  console.log(this.brand + " engine started");
};

Vehicle.prototype.stop = function() {
  this.running = false;
  console.log(this.brand + " engine stopped");
};
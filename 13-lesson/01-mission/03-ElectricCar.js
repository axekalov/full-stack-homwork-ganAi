function ElectricCar(brand, speed, doors, batteryLevel) {

  Car.apply(this, [brand, speed, doors]);
  this.batteryLevel = batteryLevel;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
  this.batteryLevel = 100;
  console.log(this.brand + " is fully charged");
};
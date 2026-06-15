
const myTractor = new Vehicle("John Deere", 30);
const myFamilyCar = new Car("Mazda", 180, 4);
const myTesla = new ElectricCar("Tesla", 250, 4, 20);


myTractor.start();   
myFamilyCar.start(); 
myTesla.start();     


myFamilyCar.openTrunk(); 
myTesla.openTrunk();    


myTesla.charge();       


console.log(myTesla instanceof ElectricCar); 
console.log(myTesla instanceof Car);         
console.log(myTesla instanceof Vehicle);     
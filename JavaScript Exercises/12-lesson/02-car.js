class CarWash {
 
  static totalWashes = 0;

  constructor(carModel, washType) {
    this.carModel = carModel;
    this.washType = washType;
  }


  #spray() {
    console.log("Spraying water...");
  }

  #applySoap() {
    console.log("Applying soap...");
  }

  #dry() {
    if (this.washType === 'full') {
      console.log("Drying car...");
    }
  }

  startWash() {
    this.#spray();    
    this.#applySoap();
    this.#dry();      
    
    CarWash.totalWashes++;
    
    console.log(`${this.carModel} wash complete. Total washes today: ${CarWash.totalWashes}`);
  }
}


const car1 = new CarWash('Toyota', 'basic');
car1.startWash(); 

const car2 = new CarWash('BMW', 'full');
car2.startWash();
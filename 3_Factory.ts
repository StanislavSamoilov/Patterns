https://refactoring.guru/ru/design-patterns/factory-method

interface ITrasport {
  deliver(): void,
}

class Truck implements ITrasport {
  public deliver() {
    console.log('Deliver using truck');
  }
}

class Ship implements ITrasport {
  public deliver() {
    console.log('Deliver using ship');
  }
}

// Base factory class
abstract class TransportFactory {
  // Factory method
  abstract createTransport()

  someOtherMethods() {
    // ...
  }
}

class TruckFactory extends TransportFactory {
  public createTransport() {
    return new Truck();
  }
}

class ShipFactory extends TransportFactory {
  public createTransport() {
    return new Ship();
  }
}

class Application {
  private config = 'Truck';
  private transportFactory;

  public init(config): void {
    switch (config) {
      case 'Truck':
        this.transportFactory = new TruckFactory();        
        break;
      case 'Ship':
        this.transportFactory = new ShipFactory();
        break;
    }
  }

  public main(): void {
    // use our transportFactory to deliver
  }
}
// https://refactoring.guru/ru/design-patterns/adapter

class ImageLibrary {
  public request(): string {
    return 'The default behavior.';
  }
}

function clientCode(imageLibrary: ImageLibrary) {
  console.log(imageLibrary.request());
}

class NewImageLibrary {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends ImageLibrary {
  private adaptee: NewImageLibrary;

  constructor(adaptee: NewImageLibrary) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return result;
  }
}

const target = new ImageLibrary();
clientCode(target);

console.log('');

const adaptee = new NewImageLibrary();
const adapter = new Adapter(adaptee);
clientCode(adapter);
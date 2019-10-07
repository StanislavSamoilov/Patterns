// https://refactoring.guru/ru/design-patterns/decorator
// ts-node + typescript

interface IDataSource {
  writeData(data: string): void,
  readData(): string,
}

class FileDataSource implements IDataSource {
  constructor(private fileName: string) { }

  public writeData(data: string): void {
    console.log(`Write data: "${data}" to ${this.fileName}`);
  }

  public readData(): string {
    console.log(`Read data from ${this.fileName}`);
    
    return `data from ${this.fileName}`;
  }
}

abstract class DataSourceDecorator implements IDataSource {
  protected wrapper: IDataSource;

  constructor(source: IDataSource) {
    this.wrapper = source;
  }

  public writeData(data: string): void {
    this.wrapper.writeData(data);
  }

  public readData(): string {
    return this.wrapper.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  public writeData(data: string): void {
    const encryptedData = `${data}, encrypted`;
    console.log(`Encrypting data: "${encryptedData}"`);

    super.writeData(encryptedData);
  }

  public readData(): string {
    const data = super.readData();
  
    const decryptedData = `${data}, decrypted`;
    console.log(`Decrypting data: "${decryptedData}"`);

    return decryptedData;
  }
}

class CompressionDecorator extends DataSourceDecorator {
  public writeData(data: string): void {
    const compressedData = `${data}, compressed`;
    console.log(`Compressing data: "${compressedData}"`);

    super.writeData(compressedData);
  }

  public readData(): string {
    const data = super.readData();

    const decompressedData = `${data}, decompressed`;
    console.log(`Decompressed data: "${decompressedData}"`);
    
    return decompressedData;
  }
}

const fileDataSource = new FileDataSource('myFile.txt');
fileDataSource.writeData('some new string');
fileDataSource.readData();

const FDSWithEncrypting = new EncryptionDecorator(fileDataSource);
// FDSWithEncrypting.writeData('some new string');
// FDSWithEncrypting.readData();

const FDSWithEncryptingAndCompressing = new CompressionDecorator(FDSWithEncrypting);
// FDSWithEncryptingAndCompressing.writeData('some new string');
// FDSWithEncryptingAndCompressing.readData();



// Logging, Guarding,...



// Function
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

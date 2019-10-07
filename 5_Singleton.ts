// https://refactoring.guru/ru/design-patterns/singleton

class Database {
  private static instance: Database;

  constructor() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}


/**
 * Класс Одиночка предоставляет метод getInstance, который позволяет клиентам
 * получить доступ к уникальному экземпляру одиночки.
 */
class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

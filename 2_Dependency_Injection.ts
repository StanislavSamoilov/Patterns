class Dependency {
  public show(): void { console.log('some dependency'); }
}

class ClassWithoutDI {
  private classDependency: Dependency; 

  constructor() {
    this.classDependency = new Dependency();
  }
}

// SOLID: Single Responsibility

class ClassWithDI {
  constructor(
    private classDependency: Dependency // instance that implement dependency interface
  ) {}
}

const dependencyInstance = new Dependency();
const classWithDI = new ClassWithDI(dependencyInstance);



// SOLID: Liskov Substitution

class test {}
// const instance = new ClassWithDI(new test);

class InheritedDependency extends Dependency {
  public other(): void { console.log('other'); }
}

const inheritedDependencyInstance = new InheritedDependency();
const inheritedClassWithDI = new ClassWithDI(inheritedDependencyInstance);



class DependencyDecorator {
  constructor(private dependency: Dependency) { }

  public show(): void {
    console.log('wrraper');
    this.dependency.show();
  }
}

const decoratedDependencyInstance = new DependencyDecorator(dependencyInstance);
const decoratedClassWithDI = new ClassWithDI(decoratedDependencyInstance);

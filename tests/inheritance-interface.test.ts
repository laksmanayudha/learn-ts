describe('inhertitance', () => {
  interface HasName {
    name: string
  }

  interface CanSayHello {
    sayHello(name: string): void
  }

  class Person implements HasName, CanSayHello{
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.log(`My name is ${this.name}, Hello ${name}!`);
    }
  }

  it('should support interface inheritance', () => {
    const person = new Person('Yudha');
    person.sayHello('Budi');
  });
});
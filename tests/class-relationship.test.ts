describe('Relationship', () => {
  class Person {
    constructor(public name: string) {

    }
  }

  class Customer {
    constructor(public name: string) {

    }
  }

  it('should support', () => {
    // kalau struktur objectnya sama, maka object dianggap sama
    const person: Person = new Customer('Yudha');
    console.log(person.name);
  });
});
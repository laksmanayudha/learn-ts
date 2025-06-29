describe('Parameter Properties', () => {

  // class Person {
  //   name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

  class Person {
    constructor(public name: string) {
    }
  }

  it('should support', () => {
    const person = new Person('Yudha');
    console.log(person.name);
  });
});
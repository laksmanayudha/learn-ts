describe('Method Overriding', () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string) {
      console.log(`Hello ${name} my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.log(`Hello ${name} my name is ${this.name}, Iam your manager`);
    }
  }

  it('should support method overriding', () => {
    const employee = new Employee('budi');
    employee.sayHello('Yudha');

    const manager = new Manager('budi');
    manager.sayHello('Yudha');
  });
});
 describe('Super Method', () => {
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
      super.sayHello(name);
      console.log('And Iam your manager');
    }
  }

  it('should support super method', () => {
    const employee = new Employee('budi');
    employee.sayHello('Yudha');

    const manager = new Manager('budi');
    manager.sayHello('Yudha');
  });
});
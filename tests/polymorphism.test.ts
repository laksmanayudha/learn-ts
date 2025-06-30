describe('Polymorphism', () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {
  }

  class VicePresident extends Manager {
  }

  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vicePresident = employee as VicePresident; // type cast
      console.log(`Hello Vice Manager ${vicePresident.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.log(`Hello Manager ${manager.name}`);
    } else  {
      console.log(`Hello Employee ${employee.name}`);
    }
  }

  it('should support', () => {
    let employee: Employee = new Employee('Yudha');
    console.log(employee);

    employee = new Manager('Yudha');
    console.log(employee);

    employee = new VicePresident('Yudha');
    console.log(employee); 
  });

  it('should support method parameter polymorphism', () => {
    sayHello(new Employee('Yudha'));
    sayHello(new Manager('Yudha'));
    sayHello(new VicePresident('Yudha'));
  });
});
describe('inhertitance', () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {

  }

  class Director extends Manager {

  }

  it('should support inheritance', () => {
    const employee = new Employee('Yudha');
    console.log(employee.name);

    const manager = new Manager('Yudha Manager');
    console.log(manager.name);

    const director = new Director('Yudha Director');
    console.log(director.name);
  });
});
describe('Super constructor', () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it('should support super constructor', () => {
    const employee = new Employee('Yudha', 'Tech');
    console.log(employee.name);
    console.log(employee.department);
  });
});
describe('properties', () => {
  class Customer {
    readonly id: number;
    firstName: string
    lastName: string = ''
    age?: number

    constructor(id: number, firstName: string) {
      this.id = id;
      this.firstName = firstName;
    }

    sayHello(name: string): void {
      console.log(`Hello ${name}, my name is ${name}`);
    }
  }

  it('should can have properties', () => {
    const customer = new Customer(1, 'john');
    customer.age = 28;
    // customer.id = 34;

    console.log(customer.id);
    console.log(customer.firstName);
    console.log(customer.age);
  });

  it('should can have method', () => {
    const customer = new Customer(1, 'Yudha');
    customer.sayHello('Eko');
  });
});
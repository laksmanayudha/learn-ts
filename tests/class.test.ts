describe('Class', () => {
  class Customer {
    constructor() {
      console.log('create new customer');
    }
  }

  it('should can create class', () => {
    const customer: Customer = new Customer();
  });

  it('should can create constructor', () => {
    new Customer();
    new Customer();
  });
});
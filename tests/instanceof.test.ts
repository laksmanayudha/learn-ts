describe('Instance Of', () => {
  it('should have problem using typeof', () => {
    class Employee{}
    class Manager{}

    const budi = new Employee();
    const eko = new Manager();

    console.log(typeof budi);
    console.log(typeof eko);

    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);
  });
});
describe('Any', function() {
  it('should support in typescript', function() {
    const person: any = {
      id: 1,
      name: 'Yudha',
      age: 20
    };

    person.age = 24;
    person.address = 'Jalan Nangka Selatan';
    console.info(person);
  });
});
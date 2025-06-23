describe('Object', function() {
  it('should support in typescript', function() {
    const person: { id: string, name?: string, hobbies?: string[] } = {
      id: '1',
      // name: 'Yudha'
    };

    console.info(person.name);
    person.name = 'Laksmana';
    // person.description = 'hello';
    console.info(person.name);
  });
});
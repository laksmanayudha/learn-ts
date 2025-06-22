describe('Array', function() {
  it('should same with javascript', function() {
    const names: string[] = ['yudha', 'laksmana'];
    const values: number[] = [1, 2, 3, 4, 5];

    console.info(names);
    console.info(values);
  });

  it('should support readonly array', function() {
    const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];
    console.info(hobbies);

    console.info(hobbies[0]);
    // hobbies[0] = 'Main game';
  });

  it('should support tuple', function() {
    const person: readonly[string, string, number] = ['laksmana', 'yudha', 20];
    console.info(person);
    // person[0] = 'santhi';
  });
});
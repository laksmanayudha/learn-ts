describe('tinkering', () => {
  it('should tinkering', () => {
    interface Person {
      name: string,
      age: number,
    };

    const helloPerson = ({ a, b }: { a?: string, b?: number } = {}): string => `${a} ${b}`;
  });
});
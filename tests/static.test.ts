describe('Static', () => {
  
  class Configuration {
    static NAME: string = 'Belajar Typescript OOP';
    static VERSION: number = 1.0;
    static AUTHOR: string = 'YudhaL';
  }

  class MathUtil {
    static sum(...values: number[]): number {
      return values.reduce(
        (acc: number, value: number): number => acc + value,
      0);
    }
  }
  
  it('should support', () => {
    console.log(Configuration.NAME);
    console.log(Configuration.VERSION);
    console.log(Configuration.AUTHOR);
  });

  it('should support static method', () => {
    console.log(MathUtil.sum(1, 2, 3));
  });
});
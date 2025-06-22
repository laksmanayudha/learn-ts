describe('Function', function() {
  it('should support in typescript', function() {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello('Yudha')).toBe('Hello Yudha');

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello('Yudha');
  });

  it('should support default value', function() {
    function sayHello(name: string = 'Guest'): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe('Hello Guest');
    expect(sayHello('Yudha')).toBe('Hello Yudha');
  });

  it('should support rest parameter', function() {
    function sum(...values: number[]) {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3)).toBe(6);
  });

  it('should support optional parameter', function() {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
    }

    expect(sayHello('Laksmana')).toBe('Hello Laksmana');
    expect(sayHello('Laksmana', 'Yudha')).toBe('Hello Laksmana Yudha');
  });

  it('should support function overloading', function() {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === 'string') {
        return value.toUpperCase();
      } else if (typeof value === 'number') {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe('Yudha')).toBe('YUDHA');
  });

  it('should support function as parameter', function() {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    // expect(sayHello('Yudha', toUpper)).toBe('YUDHA');
    // expect(sayHello('Yudha', function(name: string): string {
    //   return name.toUpperCase();
    // })).toBe('YUDHA');
    // expect(sayHello('Yudha', (name: string): string => name.toUpperCase())).toBe('YUDHA');
  });
});
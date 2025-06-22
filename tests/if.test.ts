describe('If Statement', function() {
  it('should support in typescript', function() {
    const examValue: number = 90;

    if (examValue > 80) {
      console.info('Good');
    } else {
      console.info('Bad');
    }
  });

  it('should support ternary operrator', function() {
    const value: number = 80;
    const say: string = value >= 75 ? 'Congratulation' : 'Try Again';
    console.info(say);
  });

  it('should support switch statement', function() {
    function sayHello(name: string): string {
      switch(name) {
        case 'Yudha':
          return 'Hi Yudha';
        default:
          return 'Hi';
      }
    }

    expect(sayHello('Yudha')).toBe('Hi Yudha');
  });
});
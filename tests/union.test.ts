describe('Union', function() {
  it('should support in type script', function() {
    let sample: number | string | boolean = 'Yudha';

    sample = 100;
    sample = true;
    console.info(sample);
  });

  it('should support typeof operator', function() {
    function process(value: number | string | boolean) {
      if (typeof value == 'string') {
        return value.toUpperCase()
      } else if (typeof value == 'number') {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process('Yudha')).toBe('YUDHA');
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
describe('Visibility', () => {
  class Counter {
    // private count: number= 0;
    protected count: number= 0;

    public increment(): void {
      this.count++;
    }

    public getCount(): number {
      return this.count;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
        this.count += 2;
    }
  }

  it('should support private', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.log(counter.getCount());
    expect(counter.getCount()).toEqual(3);
  });

  it('should support protected', () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.log(counter.getCount());
    expect(counter.getCount()).toEqual(6);
  });
});
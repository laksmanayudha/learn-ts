import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
  it('should return hello yudha', function() {
    expect(sayHello('yudha')).toBe('Hello yudha');
  });
});
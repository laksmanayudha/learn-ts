import { MathUtil } from "../src/math-util";
import { MathUtilTwo } from "../src/math-util";

describe('Namespace', () => {
  it('should support', () => {
    console.log(MathUtil.PI);
    console.log(MathUtil.sum(1, 2, 4));
  });
});
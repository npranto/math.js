import { expect } from 'chai';
import * as math from '../src/index';

describe('divide()', () => {
  it('should divide values properly', () => {
    const outcome = math.divide(10, 5);
    expect(outcome).to.eql(2);
  });
});

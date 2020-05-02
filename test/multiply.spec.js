import { expect } from 'chai';
import * as math from '../src/index';

describe('multiply()', () => {
  it('should multiply values properly', () => {
    const outcome = math.multiply(1, 2, 3);
    expect(outcome).to.eql(6);
  });
});

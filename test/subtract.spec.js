import { expect } from 'chai';
import * as math from '../src/index';

describe('subtract()', () => {
  it('should subtract values properly', () => {
    const outcome = math.subtract(10, 5);
    expect(outcome).to.eql(5);
  });
});

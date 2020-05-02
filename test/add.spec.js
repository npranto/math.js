import { expect } from 'chai';
import * as math from '../src/index';

describe('add()', () => {
  it('should add values properly', () => {
    const outcome = math.add(1, 2, 3);
    expect(outcome).to.eql(6);
  });
});

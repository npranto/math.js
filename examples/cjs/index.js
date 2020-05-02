const {
  add,
  subtract,
  multiply,
  divide,
} = require('nsp-math');

const addExample = add(1, 2, 3);
const subtractExample = subtract(10, 5);
const multiplyExample = multiply(1, 2, 3);
const divideExample = divide(10, 5);

// eslint-disable-next-line no-console
console.log({
  addExample,
  subtractExample,
  multiplyExample,
  divideExample,
});

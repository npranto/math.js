import reduce from 'lodash/reduce';

const multiply = (...values) => reduce(values, (total, value) => total * value, 1);

export default multiply;

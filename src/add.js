import reduce from 'lodash/reduce';

const add = (...values) => reduce(values, (total, value) => total + value, 0);

export default add;

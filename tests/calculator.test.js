const calculator = require('../code/calculator');

test('Obtains 12 by adding 10 and 2', () => {
  expect(calculator.add(10, 2)).toEqual(12);
});

test('Obtains 8 by subtracting 2 from 10', () => {
  expect(calculator.subtract(10, 2)).toEqual(8);
});

test('Gets 20 by multiplying 10 and 2', () => {
  expect(calculator.multiply(10, 2)).toEqual(20);
});

test('Gets 5 by dividing 10 by 2', () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});
const capitalize = require('../code/capitalize');

test('Capatilizes first character of word', () => {
  expect(capitalize('example')).toBe('Example');
});

test('Only capitalizes first word of string', () => {
  expect(capitalize('testing is good')).toBe('Testing is good');
});

test('Lowercases all other characters', () => {
  expect(capitalize('plAe DmC2 iS gUD GAeM')).toBe('Plae dmc2 is gud gaem');
});

test('Evaluates empty string to be an empty string', () => {
  expect(capitalize('')).toBe('');
});
const reverseString = require('../code/reverseString');

test('Reverses a word', () => {
  expect(reverseString('spinning')).toBe('gninnips');
});

test('Reverses a phrase', () => {
  expect(reverseString('around the world')).toBe('dlrow eht dnuora');
});
import reverseString from '../code/reverseString.js';

test('Reverses a word', () => {
  expect(reverseString('spinning')).toEqual('gninnips');
});

test('Reverses a phrase', () => {
  expect(reverseString('around the world')).toEqual('dlrow eht dnuora');
});
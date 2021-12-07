import caesarCipher from '../code/caesarCipher.js';

test('Can shift by 3', () => {
  expect(caesarCipher('example', 3)).toEqual('hadpsoh');
});

test('Can shift by -2', () => {
  expect(caesarCipher('example', -2)).toEqual('cvyknjc');
});

test('Wraps forwards from z to a', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
});

test('Wraps backwards from a to z', () => {
  expect(caesarCipher('cba', -3)).toEqual('zyx');
});

test('Retains casing', () => {
  expect(caesarCipher('Case', 2)).toEqual('Ecug');
});

test('Ignores punctuation', () => {
  expect(caesarCipher('.hello!', 3)).toEqual('.khoor!');
});

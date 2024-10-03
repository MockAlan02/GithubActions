// Jest test for index.js
const consoleSpy = jest.spyOn(console, 'log');

test('prints Hello World to the console', () => {
  require('./app');
  expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
});
const stringLength = require('./stringLength.js');

test('returns string length', () => {
  const testString1 = 'joseph';

  
  expect(stringLength(testString1)).toBeLessThanOrEqual(10);
  expect(stringLength(testString1)).toBeGreaterThanOrEqual(1);
});

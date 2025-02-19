const multiplesOf3or5 = require('./multiplesof3or5');

test('the sum of multiples of 3 or 5 under 10 is 23 ', () => {
  expect(multiplesOf3or5(10)).toBe(23);
});

test('the sum of multiples of 3 or 5 under 30 is 195 ', () => {
  expect(multiplesOf3or5(30)).toBe(195);
});
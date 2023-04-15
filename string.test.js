const stringLength = require('./stringLength');

test('stringLength great to equal 5', () =>{
  expect(stringLength('great')).toBe(5);
});

test('if stringLength less than 1', () =>{
  expect(stringLength('')).toBe('error');
});

test('if stringLength greater than 10', () =>{
  expect(stringLength('qwertyuiopasdfg')).toBe('error');
});

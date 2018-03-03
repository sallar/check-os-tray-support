const check = require('./');

// check().then(res => {
//   console.log('done', res);
// });

console.log(check());

import test from 'ava';

test('arrays are equal', t => {
  t.deepEqual([1, 2], [1, 2]);
});

import test from 'ava';
import check from './';

test('libappindicator1 is available', t => {
  t.is(check(), true);
});

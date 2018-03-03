import test from 'ava';
import check from './';

test('libappindicator1 is', t => {
  t.is(check(), true);
});

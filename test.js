import test from 'ava';
import Alternate from '.';

test(t => {
  const a = new Alternate(true, false);
  t.true(a.peek());
  t.true(a.peek());
  t.true(a.next());
  t.false(a.peek());
  t.false(a.peek());
  t.false(a.next());
});

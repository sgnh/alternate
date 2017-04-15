import test from 'ava';
import alternate from '.';

test(t => {
  const a = new alternate(true, false);
  t.true(a.peek());
  t.true(a.peek());
  t.true(a.next());
  t.false(a.peek());
  t.false(a.peek());
  t.false(a.next());
});

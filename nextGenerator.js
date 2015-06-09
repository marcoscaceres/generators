/**
 * Understanding .next()
 */

function* nextGenerator() {
  yield 'First yielded value';
  let value = yield 'second yield';
  return value;
}

let g = nextGenerator();

//.prototype.next();
// Returns an object with a common interface
// {value,done}
let next = g.next();
console.log(next.value);
console.log(next.done);


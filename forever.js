function* foreverGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
  return "done";
}

let g = foreverGenerator();
//.prototype.return();
//returns the given value and finishes the generator itself.
console.log({value, done} = g.next())
console.log({value, done} = g.next())
console.log({value, done} = g.next())
console.log({value, done} = g.next())

//Ok, let's kill it:
g.return('20');

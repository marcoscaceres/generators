function* basicGenerator() {
  yield 'First yielded value';
  let value = yield 'second yield';
  return value;
}

//Calling the function constructs a generator
let g = basicGenerator();

//Generator
console.log(g);

// Let's explore the prototype!
// .next()
// .return()
// .throw()

/**
 * Understanding .throw()
 * .throw() - throws an exception into the generator
 */
function* exGenerator() {
  var value = 123;
  try {
    yield value;
  } catch (err) {
    value = 321;
  }

  return `we are done with value ${value}`;
}

//Don't throw
var gDontThrow = exGenerator();
gDontThrow.next();
gDontThrow.next('and done').value;

//This one is going to throw.
var gThrow = exGenerator();
var next = gThrow.next(); //123
gThrow.throw(new Error("no good"))

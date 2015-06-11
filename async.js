function async(aGenerator) {
  if (!aGenerator || aGenerator.isGenerator() === false) {
    throw new TypeError('Expected Generator');
  }
  let gen = aGenerator();
  iterate(gen, gen.next());

  function iterate(gen, next) {
    if (!next.done) {
      let value = next.value;
      if(!(value instanceof Promise)){
      	gen.next(value);
      	return;
      }
      value.then(
        value => iterate(gen, gen.next(value)),
        err => {
          gen.throw(err);
          iterate(gen, gen.next())
        }
      )
    }
  }
}

//
var expected = "Expected exception."
let err;
try{
  async();
}catch(e){
  err = e;
}finally{
  console.assert(err instanceof Error, expected);
}

var expected = "Expect exception when sending a non generator function";
let err;
try{
  async(function(){});
}catch(e){
  err = e;
}finally{
  console.assert(err instanceof Error, expected);
}

async(function* () {
  var x = yield Promise.resolve("testing");
  console.assert(x === "testing", "Expected the string testing" )
});

async(function* () {
  var x = yield Promise.resolve("testing");
  var y = yield Promise.resolve(x + "123");
  var z = yield Promise.resolve(y + "456");
  console.assert(z === "testing123456", `Expected the string testing123. Got: ${z}`);
});

//Testing try/catch
async(function* () {
  let err;
  try{
   var x = yield Promise.reject(new Error("testing111"));
  }catch(err){
    console.assert(err.message === "testing111", "Expected the string testing111")
  }
});




// Promises
let someCondition = false;

let p = new Promise((resolve, reject) => {
  if( someCondition ){
    return resolve('yippy')
  }
  reject(new Error('boo hoo!'));
});

p.then( 
  yay => console.log(yay),
  boo => console.log(boo)
);

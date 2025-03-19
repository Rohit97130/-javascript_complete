
//Promise.all
function Action1(name) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      // reject('error')
        resolve(`My name is ${name}`);
      }, 6000);
  })
}


function Action2(age) {
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
        // reject('error')
          resolve(`My name is ${age}`);
      }, 2000);
  })
}
function Action3(occupation) {

  return new Promise((resolve,reject)=>{
    console.log('dkfdmf');
    
      setTimeout(() => {
        //  reject('error')
          resolve(`My name is ${occupation}`);
      }, 1000);
  })
}
 

Promise.all([Action1("rohit"),Action2(24),Action3("Software Engineer")])
.then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.log(err);
})

console.log('roo');

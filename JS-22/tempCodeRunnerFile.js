function Action1(name) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject('error')
        resolve(`My name is ${name}`);
      }, 6000);
  })
}


function Action2(age) {
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
        reject('error')
          resolve(`My name is ${age}`);
      }, 2000);
  })
}
function Action3(occupation) {
  return new Promise((resolve,reject)=>{
      setTimeout(() => {
         reject('error')
          resolve(`My name is ${occupation}`);
      }, 1000);
  })
}
 

// Promise.all([Action1("rohit"),Action2(24),Action3("Software Engineer")])
// .then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//    console.log(err);
// })






////////////////////
//!Promise.race which promise wins the race
//!it just execute promise which resolve earlier
//minumumm time taken promise and ignore all the other

Promise.race([Action1("rohit"),Action2(24),Action3("Software Engineer")])
.then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.log(err);
})




////////////////
//!it work very much similar like race
//!but what is the difference but if i reject something with any then there
//!it will  not give an  error but it will move to  further next promise that can be resolved
//!in case of all promise rejected it will
Promise.any([Action1("rohit"),Action2(24),Action3("Software Engineer")])
.then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.log(err);
})




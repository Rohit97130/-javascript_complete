console.log("Start");

/* this will not work at all
function printname(name){
   
   setTimeout(()=>{
     return (`My name is ${name}`);
   },1000)
  
}*/
//!we will use call back function
function printname(name, callback) {
  setTimeout(() => {
    callback(`My name is ${name}`);
  }, 1000);
}

printname("rohit", function (message) {
  console.log(message);
});

console.log("End");













/////////////////////

//!Call back hell

function Action1(name, cb) {
  setTimeout(() => {
    cb(`My name is ${name}`);
  }, 2000);
}
function Action2(age, cb) {
  setTimeout(() => {
    cb(`My age is ${age}`);
  }, 1000);
}
function Action3(occupation, cb) {
  setTimeout(() => {
    cb(`My occuputation is ${occupation}`);
  }, 4000);
}

//will print serially
// but this is call back hell
Action1("rohit", function (message) {
  console.log(message);
  Action2(23, function (message) {
    console.log(message);
    Action3("software enginner", function (message) {
      console.log(message);
      Action3("software enginner", function (message) {
        console.log(message);
        Action3("software enginner", function (message) {
            console.log(message);
            Action3("software enginner", function (message) {
                console.log(message);
            });
          });
      });
    });
  });
});












///////////////////////
//!now we can solve this with the help  of promises
//promisefied funnction

function Action1(name) {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
          // reject('error');
          resolve(`My name is ${name}`);
        }, 2000);
    })
  }


  function Action2(age) {
    return new Promise((resolve,reject)=>{
       console.log('roj');
       
        setTimeout(() => {
            resolve(`My name is ${age}`);
        }, 2000);
    })
  }
  function Action3(occupation, cb) {
    return new Promise((resolve,reject)=>{
      console.log('rojiotniom');
      
        setTimeout(() => {
            resolve(`My name is ${occupation}`);
        }, 1000);
    })
  }

/*  this is not a good way :- promise hell
  Action1('rohit').then(name=>{
      console.log(name);
      Action2(22).then(age=>{
       console.log(age);
        Action3('software enginner').then(occu=>{
            console.log(occu);   
        })
      })
  })*/


Action1('rohit').then((res)=>{
  console.log(res);
  return Action2(24)
}).then((res)=>{
   console.log(res);
   return Action3('Software Enginner');
}).then(console.log).catch((err)=>{
  console.log(err)
}).catch((err)=>{
   console.log(err);
});

console.log('end');





































////////////////////

//Promise Combinators
// .all , .race , .allSettled , .any 

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
      setTimeout(() => {
        //  reject('error')
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
//! in case of same time it will pick up  acc. to order in which it write
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
//!in case of all promise get rejected it will an error like this [AggregateError: All promises were rejected]
//! it will not work  with anyone
Promise.any([Action1("rohit"),Action2(24),Action3("Software Engineer")])
.then((res)=>{
   console.log(res);
}).catch((err)=>{
   console.log(err);
})







///////////////////
// Promise.allSettled 
//it will give entire data of your promise (reject,resolve)
// Promise.allSettled([Action1("rohit"),Action2(24),Action3("Software Engineer")])
// .then((res)=>{
//    console.log(res);
// }).catch((err)=>{
//    console.log(err);
// })











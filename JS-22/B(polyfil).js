//!Polyfills of all.promise

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
          reject('error')
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





//!pollyfills.
//Promise.all Polyfill
//input must be promises, and they should be inside a array
//Resolves each promise one by one
//Provides the Final Output in  an Array
//return fulfilled values inside and Array
//then(resolve, reject)



Promise.allPolyfill = function(promises){
     return new Promise((resolve,reject)=>{
         let results = []
         if(!promises.length){
            resolve(results)
            return;
         }

         
         let pending = promises.length;

         promises.forEach((promise,idx)=>{
              Promise.resolve(promise).then((res)=>{
                 results[idx] = res;
                 pending--;

                 if(pending === 0){
                  resolve(results);
                 }
              },reject);
         });

     })
}








//map filter reduce forEach
//Call appy Blind
//Promise.all







Promise.allPolyfill([Action1("rohit"),Action2(24),Action3("Software Engineer")])
.then((res)=>{
   console.log(res);
},function(err){
  console.log(err); 
})

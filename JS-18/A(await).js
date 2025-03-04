//!Understanding Async keyword / Await 

//TODO: wheever async keyword write before on  the function  it always wriiten  fulfilled promise

async  function greeting(){
    return 'Hello'; // 1st Case

    // return new Promise((resolve , reject)=>{
    //    let a =3;
    //    let b = 3;

    //    if(a==b){
    //       resolve('Promises Resolved');
    //    }
    //    else{
    //      reject('Promises Reject');
    //    }  
    // })

}

let message = greeting();

message.then((result)=>{
    console.log(result);
})

console.log(message);










/////////////////////

//New Promise

let newPromise = new Promise((resolve,reject)=>{
   
  setTimeout(()=>{
      resolve('Promise Resolved successfully')
  },4000);
})

let newPromise2 = new Promise((resolve,reject)=>{
   
  setTimeout(()=>{
      resolve('Promise2 Resolved successfully')
  },8000);
})


function executePromise(){
  newPromise.then((res)=>console.log(res));

  console.log("Scaler is Awesome");
  
}

// executePromise();





//await wait for the promise to get resolve and it can be used inside a aysnc
async function executePromiseAsync(){

     console.log("hello");
     
      const val1 = await newPromise //suspended the function  execution //alternate of then()
      console.log(val1); 
      //It replicate await synchronous way of javascript


      const val2 = await newPromise2
      console.log(val2);
      
      console.log("Scaler is Awesome from  Async Function");
     
}
executePromiseAsync();



console.log("rohit");



//!Reduce 

let arr = [1,2,3,4,5];

let sum = arr.reduce(function(acc, curr){
       return acc+ curr;
},0)
console.log(sum);


//POLyfills of reduce
// cancelIdleCallback, acc , intialvalue
 let arr1= [1,2,3,4,5];
Array.prototype.myreduce = function(callback,intialvalue){
     
    // let accumulator = intialvalue;
    let accumulator;
    let firstIndex;
    if(arguments.length === 1){
        firstIndex =1;
        accumulator = this[0];
    }
    else{
        firstIndex = 0;
        accumulator = intialvalue;
    }
    for(let i=firstIndex;i<this.length;i++){
        accumulator = cb(accumulator,this[i]);
   }
   return accumulator
}

function  cb(accumulator,currentvalue){
  return accumulator+currentvalue;
}
let sum1 = arr1.myreduce(cb);
console.log(sum1);












 

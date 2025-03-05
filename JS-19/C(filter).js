//! PollyFills of filled higher order function

let arr = [1,2,3,4,5,6,7];

let resultArray = arr.filter(function(num){
    return num%2 ==0;
})
console.log(resultArray);



//polyfill  for filter Method
let arr1 = [1,2,3,4,5,6];
Array.prototype.myfilter = function(callback){
    let resultArray = []
   for(let i=0;i<this.length;i++){
       if(callback(this[i]) === true){
          resultArray.push(this[i]);
       }
   }

    return resultArray;
}

function iseven(condition){
  return condition%2 === 0;
}
function isOdd(condition){
  return condition%2 != 0;
}

let filterarray = arr1.myfilter(iseven);
console.log(filterarray);

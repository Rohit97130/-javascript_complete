// 
let arr = [1, 2, 3, 4, 5]

// Calculate the sum of all  the array  elements



// function sumAll(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum

// }
// let total = sumAll(arr);
// console.log(total);




 // high order function can only be used with  array 

// reduce

// function  sum(acc, num){  // we can  write in  this manner also
//   acc = acc+ num
//   return acc
// }

 let sumFromreduce = arr.reduce(function(acc,num){
          acc= acc+ num
        return acc;
   },0);
console.log(sumFromreduce); 
   



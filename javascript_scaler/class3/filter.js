

let arr = [2, 4, 7, 8, 10, 11, 13,]



// function geteven(arr){
//    let  evenNumbers = []
//    for(let i =0; i<arr.length;i++){
//      if(arr[i]%2 ==0){
//      evenNumbers.push(arr[i]);
//      }
//    }
//    return evenNumbers;
// }

// let resultEvenArray = geteven(arr);

// console.log(resultEvenArray);





// Filter works when  we want to  check  something (some condition) and  on the contrary  map  works  for all  the arithemetic opertion
let evenArray = arr.filter(function (num) {
    return num % 2 == 0;  //true // false
}
)
console.log(evenArray);




// problem 
const Transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const intrtToUsd = 80;

 let positive_Trans  = Transactions.filter(function(amount){
          return amount>0;
 })
 console.log(positive_Trans);
 


 
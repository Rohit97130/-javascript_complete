let arr = [1, 2, 3, 4, 5]
// get squares for all  the array  element

//  map it apply  call  function  to  every  element of array and return  new array
// map  is a high order function
function square(num) {
  return num * num;
}

let resultfromMap = arr.map(square);
console.log(resultfromMap);
//  you  can also  put whole function  insead of square as a argument
//  let resultfromMap= testarr.map(
//     function  square(num){6
//         return num*num; // [4,9,16,25,36]
//     }
//  );





// I have Bank Transaction and you  have change this from  usd to  inr
const Transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const intrtToUsd = 80;

// let result = Transactions.map((num)=>{
//        return num*80;
// })
//  console.log( result);
 












let answer = Transactions.map(
  function (amount) {
    return amount * 80;
  })
console.log(answer);

 // add two  numbers

 // function  creation (traditional way of creating way)
function addTwoNumber(a,b){
     let sum = a + b;
     console.log(sum)
}

// // how to  call or invoke a fuction
// addTwoNumber(1,2)
addTwoNumber('rohit' , ' jain')


// //function  with  string
// function  printName(name){
//         console.log(name);
        
// }
// printName('rohit')









//! new topic

// functions as first class citizens

// function sayHi(){
//     console.log('Hi');   
// }  // this is a traditional  function
// sayHi();

// funtion as Expression --> function  is in the inside the varible called as a first class citizen
// let sayHiFC = function(){
//     console.log('HI');
// }  // first class function
// sayHiFC();
// console.log(sayHiFC );


// // create a  multiply 2 numbers function and  use first class citizen concept

// let multiplyTwo =  function(a,b){
//     let mul = a*b;
//     console.log(mul);
// }
// multiplyTwo(2,3)











// new topic
// Arrow functions

let subtract2 = (a,b) =>{
    console.log(a-b);
}
subtract2(3,2);
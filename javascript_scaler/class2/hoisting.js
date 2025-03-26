// printNameFC('Snehal');
 console.log(a);  //hoisted with the value undefined


// printName('snehal')  // it will  work 

// var a = 'Scaler'


// function printName(name){
//     console.log(name)
// }






// // in first class citizen it will  not work
//  // printNameFC('Snehal'); give an  error

//   var printNameFC = function(name){
//        console.log(name)
// }
//  printNameFC('Snehal');
 





//  new topic

console.log(a); // it will  not allow to acces variable before initailization it will  kept this a varible in temporal dead zone
let a=5  // const also put in  temporal  dead zone


var printNameFC1 = function(){
    console.log('test');
}

printNameFC1();
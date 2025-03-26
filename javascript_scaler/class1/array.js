let arr = [1,'Scaler' ,3,4,true,undefined,  null , [1,2,4]]

console.log(arr);


// how to  accesss array  Element

console.log(arr[1]);
 
arr[2] = 'Mrinal'         // reassinging

console.log(arr);



















//////////////////////////////










                                         //new topics

// Array  Methods

//push Method will  add an element at the end of an array
let cars = ['Urus' , "bentely" , 'BmW']

cars.push('KIA_SELTOS')

console.log(cars);



// pop method  will  delete at the end of the aRRAY
cars.pop();
console.log(cars);

let removeElement =  cars.pop();  // BMW
console.log(cars);
console.log(removeElement);


//!  Shift and  Unshift
  
//  Unshift will  add  an  element at the start of your array

cars.unshift('ferrai');
console.log(cars);


// shift will  remove an element at the start of your array
let y =cars.shift()
console.log(cars);
console.log(y);














////////////////////////

// Object Definition
let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}
console.log(cap['name']);




// Loop through Object Properties
for (let key in cap) {
    console.log(key, " ", cap[key], " ", cap.key);
}
for(let k in  cap){
    console.log(k,cap[k] , cap.k);
    
}
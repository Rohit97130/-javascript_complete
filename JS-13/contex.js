
function test(a,b){
    console.log(a,b,this);
    
}
var obj = {
    name: "praveen",
    age: 17,
};
obj.mytest = test;

obj.mytest(1,2); //obj(gf)


//////////////////

 const newTestFn = obj.mytest;
 newTestFn(3,4); // window(crush)

 newTestFn.call(obj,6,7);  //obj


 //////////////////
 const obj1 ={
    name: "vinetha",
    age:99,
 }
newTestFn.call(obj1,8,9); 
newTestFn.apply(obj1,[10,11]); 

/*
newTestFn.apply(obj1,[7,6]); 
only difference is when we pass any  argument we need to pass in the array format and rest everthing will be same
*/


///////////////////////////
const obj3 ={
    name:"kavya",
    age: 18,
    
}
const obj4 ={
    name:"vidhusi",
    age: 21,
}


function greet(){
    console.log(this); 
}
obj3.greetFn = greet;
obj3.greetFn(); //kavya

const greetFnFromObj3 = obj3.greetFn.bind(obj4);
// const greetFnFromObj3 = obj3.greetFn.bind(obj4); it binds to  obj4
greetFnFromObj3(); //instead of window(crush) wee get kavya

const f2 = greetFnFromObj3;
f2();






////////////////////////////
// obj4.greetFn = obj3.greetFn.bind(obj4);
obj4.greetFn = obj3.greetFn;
obj4.greetFn(); //vidhusi
console.log("rrr",obj4);


//?call => It execute the function then and there
//bind  => It return  the new function not execute just bind that function

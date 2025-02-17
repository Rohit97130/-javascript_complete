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
greetFnFromObj3(); 
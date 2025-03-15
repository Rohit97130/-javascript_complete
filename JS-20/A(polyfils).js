//!Pollyfills of call bind 

//call method explicit binding

var obj = {
    name: 'Rohit'
}
function sayHello(){
    let name = "ro"
    return 'Helllo ' + this.name +' ' + name;
}

let ans = sayHello.call(obj);
 console.log(ans);





 //////////////////
var obj = {
    name: 'Rohit'
}
function sayHello(age , lastname){
    return 'Helllo ' + this.name +' ' + age + ' ' +lastname;
}

let ans2 = sayHello.call(obj,25,'jain');
let ans3 = sayHello.apply(obj,[25,'jain']); //apply
 console.log(ans2);
 console.log(ans3);


 //why we need array  for apply  method





 ///////////////
 var obj = {
    name: 'Rohit'
}
function sayHello(age ,lastname ){
    let name = "ro"
    return 'Helllo ' + this.name +' ' + age + ' ' +lastname;
}
let ans4 = sayHello.bind(obj) //
console.log(ans4(25,'Jain'));

console.log(ans4(26, 'civil Engineer'));
console.log(ans4(26, 'software Engineer'));
console.log(ans4(26, 'electricla Engineer'));










/////////////////////// - 
//Interview Question
//Q1

const person = {name: 'Mark'};

function sayHi(age){
    return `${this.name} is ${age} years`;
}
console.log(sayHi.call(person,20));
let a =sayHi.bind(person,22)
console.log(a(20)); //20 will  be ignored


//Q2 

const age  = 10;

var person3 = {
    name: "mark",
    age:30,
    getAge: function(){
        return this.age;
    }
}
var person2 = {age: 24}
console.log(person3.getAge());

console.log( person3.getAge.call(person2));



//Q3

 var status = 'hi'

 setTimeout(()=>{
    const status = 'hi';
     
    const data = {
        status : 'hello',
        getStatus(){
            return this.status;
 }
};

console.log(data.getStatus());
console.log(data.getStatus.call(this));

 },0);



//Q4

const animal = [
    {species: "Lion" ,name:"king"},
    {species: "Tiger" ,name:"Queen"},
];
const animal2 = [
    {species: "Lion" ,name:"king"},
    {species: "Tiger" ,name:"Queen"},
];


function printAnimals(i){
    this.print = function(){
        console.log("#" + i + " "+ this.species + ": " + this.name);
        
    }
    this.print();
}

for(let i=0;i<animal.length;i++){
     printAnimals.call(animal[i] ,i);
}



//Q6

const numbers = [1,2,3,40,5]

// let min = Infinity;
// let max = -Infinity;
// for(let i=0;i<numbers.length;i++){
//    if(min>numbers[i]) min = numbers[i]
//    if(max<numbers[i]) max = numbers[i]
// }
// console.log(min,max);

//use case of apply  method
console.log(Math.max.apply(null,numbers));
console.log(Math.min.apply(null,numbers));


 


 
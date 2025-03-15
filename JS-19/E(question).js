//!question solve


//Q5 Name INitials

// const input = "Geroge raymond Richard Martin";
//Output  = GRRM

//solution
const input = "Geroge raymond Richard Martin";

const Output = input.split(' ').map(function(word){
    return word[0];
}).join('');
 console.log(Output);
//separator(' ')




//////////////////////

//Q2. Given an array  of Objects users, print user of particular age along with their frequency 

const users = [
    {firstName:"John", lastname: "Biden" ,age:26},
    {firstName:"Jimmy", lastname: "cob" ,age:75},
    {firstName:"Sam", lastname: "lewis" ,age:50},
    {firstName:"Sachin", lastname: "Tendulkar" ,age:50},
    {firstName:"ronald", lastname: "Mathew" ,age:26},
];

// outpur ->
// 26->2
// 75-1
// 50->2

const ans = users.reduce(function(acc, cur){
   if(acc[cur.age]){
      acc[cur.age]++;
   }
   else{
    acc[cur.age] =1;
    }

   return acc
},{})
 
console.log(ans);









//////////////////////
//method chainning

//Q4 print the names of student who  scored more than  60

let student = [
    {name:"Smith", rollNUmber:31, marks: 80},
    {name:"jenny", rollNUmber:15, marks: 69},
    {name:"JOhn", rollNUmber:16, marks: 35},
    {name:"Tiger", rollNUmber:7, marks: 55},
    ];


    let res = student.filter(function(num){
       return num.marks>60;
    }).map(function(obj){
        return obj.name
    }).join('\n');

    // res.forEach(function(ans){
    //     console.log(ans.name);
    // })
    console.log(res);
    






//Q1. given an array of objects users, print fullname.

const user =[
    {firstName:"john", lastName:"Biden", age:26},
    {firstName:"jimmy", lastName:"cob", age:75},
    {firstName:"sam", lastName:"lewis", age:50},
    {firstName:"ronald", lastName:"Mathew", age:26},   
]

let res2 = user.map(function(obj){
    return `${obj.firstName} ${obj.lastName}`;
})
console.log(res2);







/////////////////

//Q4 print object having marks greater than 60 and rollNUmber grater than 15

let student1 = [
    {name:"Smith", rollNUmber:31, marks: 80},
    {name:"jenny", rollNUmber:15, marks: 69},
    {name:"JOhn", rollNUmber:16, marks: 90},
    {name:"Tiger", rollNUmber:7, marks: 55},
    ];


let ans4 = student1.filter(function(obj){
    return (obj.rollNUmber>15 && obj.marks>60);
})
console.log(ans4);

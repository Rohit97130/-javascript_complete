// TODO: Example 1

var a = 10;
var b = 11;
var c = b; //passed as a value
console.log(a,b,c);  //10,11,11
var b = 13;

console.log(a,b,c);  //10, 13,11


//////////////////////
// TODO: Example 2
var a = 10;
var b =20;
a=b;
console.log(a,b);    //20 ,20




/////////////////////
// TODO: Example 3
var a = 10;
var b =20;
var tmp;

tmp = a;
a=b;
b = tmp;
console.log(a,b); //20 10


////////////////////
// TODO: Example 4

var  a = {name: "shahbaz"};
var  b = {name: "Poorna"};

var c = b;   //passed as a reference
c.name = "Nirmal";
console.log(a,b,c);





///////////////////
// TODO: Example 5
var  a = {name: "shahbaz"};
var  b = {name: "Poorna"};


tmp = a; //!changing the reference
a=b;
b = tmp;
console.log(a,b); 


//TODO: Example 6
var  a = {name: "shahbaz"};
var  b = {name: "Poorna"};

a.name = b.name;
b.name ="kavya";
console.log(a,b);




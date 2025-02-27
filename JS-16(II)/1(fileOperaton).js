//import the fs module
//fs module used to  read ,write and interact with module directly
const fs  = require("fs");
console.log('Before');



// let data1 =fs.readFileSync("f1.txt","utf8"); it is not working in my system
// let filePath = "C:\\scaler course\\javascript\\JS-16(II)\\f1.txt"; 
// let data1 = fs.readFileSync(filePath, "utf8");



//synchronous file
let data1 = fs.readFileSync("C:\\scaler course\\javascript\\JS-16(II)\\f1.txt")
console.log('data from file 1->'+ data1);

console.log('After');


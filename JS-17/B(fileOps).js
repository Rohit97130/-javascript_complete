const fs  = require("fs");
console.log('Before');


//!this inbuild function promise which is comes in fs module has an  functionality of fulfilling and rejecting
let promiseReadFile = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f1.txt');

promiseReadFile.then(function(data){
   console.log('The file data is -> ' + data);
})
promiseReadFile.catch(function(err){
   console.log(err);
})

let promiseReadFile2 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f2.txt');

promiseReadFile2.then(function(data){
   console.log('The file data is -> ' + data);
})
promiseReadFile.catch(function(err){
   console.log(err);
})


let promiseReadFile3 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f3.txt');

promiseReadFile3.then(function(data3){
   console.log('The file data is -> ' + data3);
})
promiseReadFile.catch(function(err){
   console.log(err);
})
console.log('after');
//TODO: it will be any  random order
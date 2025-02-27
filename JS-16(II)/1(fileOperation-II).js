//!Aysnchronous Programming
const fs  = require("fs");
console.log('Before');


//TODO: this will run file asynchronously
fs.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f1.txt' ,(err,data1)=>{
    if(err){
        console.log(err);
        return; 
    }
    console.log('This is File1 data ->' + data1);
    
})
fs.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f2.txt' ,(err,data2)=>{
    if(err){
        console.log(err);
        return; 
    }
    console.log('This is File3 data ->' + data2);
    
})
fs.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f3.txt' ,(err,data3)=>{
    if(err){
        console.log(err);
        return; 
    }
    console.log('This is File2 data ->' + data3);
    
})
//! order of execution  of asynchronous function will be random 



console.log('After');
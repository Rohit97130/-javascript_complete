const fs  = require("fs");
console.log('Before');


let promiseReadFile = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f1.txt');
let promiseReadFile2 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f2.txt');
let promiseReadFile3 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f3.txt');

function Filereadcallback(data){
    console.log('The file data is -> ' + data);
}
function errorhandle(err){
    console.log(err);
    
}

promiseReadFile.then(Filereadcallback).catch(errorhandle);
promiseReadFile2.then(Filereadcallback).catch(errorhandle);
promiseReadFile3.then(Filereadcallback);



promiseReadFile3.catch(errorhandle);

console.log('after');
const fs  = require("fs");
console.log('Before');


let promiseReadFile = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f1.txt');

function cb1(data){
    console.log('The file data is -> ' + data);
    let promiseReadFile2 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f2.txt');
    return promiseReadFile2;
}
function cb2(data){
    console.log('The file data is -> ' + data);
    let promiseReadFile3 = fs.promises.readFile('C:\\scaler course\\javascript\\JS-16(II)\\f3.txt');
    return promiseReadFile3;
}
function cb3(data){
    console.log('The file data is -> ' + data);
}
function errorhandle(err){
    console.log("this is file  data error ->" + err);
    
}

promiseReadFile.then(cb1).then(cb2).then(cb3).catch(errorhandle);


console.log('after');
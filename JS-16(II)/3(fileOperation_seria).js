const fs = require("fs");
console.log("Before");

//! Prirotizing the function
//!how asynchronous function you  making them serailly
function cb(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is File1 data ->" + data);
  fs.readFile("C:\\scaler course\\javascript\\JS-16(II)\\f2.txt", cb2);

}
function cb2(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is File2 data ->" + data);
  fs.readFile("C:\\scaler course\\javascript\\JS-16(II)\\f3.txt", cb3);
}

function cb3(err,data){
  if(err){
    console.log(err);
    return;
  }
  console.log("This is File3 data ->" + data);
  
}

fs.readFile("C:\\scaler course\\javascript\\JS-16(II)\\f1.txt", cb);



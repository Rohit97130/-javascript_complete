//!pollyfills of map

/* //TODO how to use:-
let arr = [1,2,3,4];
let squareNum = arr.map(function(num){
    return num* num
})
console.log(squareNum);
*/


let arr1 = [1,2,3,4];
Array.prototype.formap =function(callback){
    let resultantArray = [];
    for(let  i =0;i<this.length;i++){
        resultantArray.push(callback(this[i]));
    }
    return resultantArray;
}

function cb(num){
    return num* num;
}

let squareNum1 = arr1.formap(cb);
console.log(squareNum1);



//loop ,array, resultantArray ,  callback
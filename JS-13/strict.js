'use strict';

 let a =10;
console.log(a);


const obj = {};
Object.defineProperty(obj, "readonly",{value : 34, writable: false , enumerable: true});
obj.score = 99;
obj.readonly = 35;
console.log(obj);

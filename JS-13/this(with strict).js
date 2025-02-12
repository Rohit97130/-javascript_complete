'use strict';

console.log(this);//empty and window

function  test(){
    console.log(this);  // it points toward to the udefined
}
test(); //undfined



//////////////////////////////////////



let obj = {
    name:'ekta',
    age: 23,
    getPrintInfo: function(){
        console.log(this); //object
    }
};
obj.getPrintInfo();



/////////////////////////////
const getThisFn= obj.getPrintInfo;
getThisFn(); //undefined
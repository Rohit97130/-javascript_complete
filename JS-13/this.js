

// it points to  the empty object and window when  tried to use in global space
console.log('1.',this); //window and empty

//this inside into the function
function  test(){
    console.log('1.' ,this);  // it points toward the global object and(window object)
}
test();



//////////////////////////////////////



let obj = {
    name:'ekta',
    age: 23,
    getPrintInfo: function(){
        console.log('2.',this); //object
    }
};
obj.getPrintInfo();



/////////////////////////////
const getThisFn= obj.getPrintInfo;
 getThisFn(); 





let obj2 = {
    name: "mrityunjay",
    age: 25,
    testfunction: function () {
        function test(){
           console.log('3.' , this);
        }
        test();
    }
};

obj2.testfunction();

//add three number


function add(a,b,c){
    return a+b+c;
}

// console.log(add(1,2,3));



//!Currying - whenever you  create a function pass a one argu at a time.

function fn1(a){
    return function fn2(b){
       return  function fn3(c) {
            return a+b+c;
        }
    }
}

/*
let fn2Returned = fn1(1);
let fn3 = fn2Returned(2);
let final = fn3(3);
*/

let final = fn1(3)(4)(5);
console.log(final);



//we need to add 2 to every argumment and then sum everything

function add2(a){
    a =a+2;
    return function fn1(b){
       b= b+2;
       return function fn1(c){
          c= c+2;
       return function fn2(d){
          d= d+2;
       return function sum(){
         return a+b+c+d;
       }
    }
}
    }
}
console.log(add2(1)(2)(3)(4)());
 




/////////////////

//Q2 
//Calculate('sum')(3)(4) ->7
//Calculate('subtract')(5)(2) ->3
//Calculate('multiply')(3)(4) ->12
//Calculate('divide')(8)(4) ->2


function Calculate(s){
     return function f1(a){
        return function f2(b){
              if(s==='add') return a+b;
              else if(s==='subtract') return a-b;
              else if(s==='multiply') return a*b;
              else if(s=== 'divide' )return a/b;
              else return 'Ivalid Operation';
        }
     }
}

console.log( Calculate('add')(1)(2));
console.log( Calculate('subtract')(4)(2));
console.log( Calculate('multiply')(3)(2));
console.log( Calculate('divide')(2)(0));




//Q3 Infinite Currying

//write an add function which can values like this

//add(2)(3)(4)(5)(6)(7 ).........()


function add(a){
     return function(b){
         if(b) return add(a+b);
         return a;
     }
}
console.log(add(1)(2)(3)());
 




//Partial Application

function addPartial(a,d){
   return function(b,c){
     return function(f,g,h){
        console.log(a+b+c+d+f+g+h);
     }
   }
}
addPartial(1,2)(3,4)(5,6,7);
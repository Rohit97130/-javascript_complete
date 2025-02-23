//!Question 1:

console.log('A');
console.log('B');
console.log('C');

//A,B,C

//!Question 2:
setTimeout(function(){
    console.log('Z'); 
},1000);
setTimeout(function(){
    console.log('A ');   //by  default brower setout time is 0ms
});
console.log('B');

setTimeout(function(){
    console.log('C'); 
},0); 





//!Ouestion3:

var isChamp = true;
// while(isChamp){
//    console.log('A');
   
// }
console.log('B');

setTimeout(function(){
    console.log('C'); 
},0); 



//!Ouestion 4:
setTimeout(function(){
    console.log('C');
},0)

for(var i =0;i<10000;i++){
   console.log('A');
}

console.log('B');

// A*100000 , B ,C






//!Question 5:

setTimeout(function(){
    console.log('A'); 
},0);
setTimeout(function(){
    console.log('B');   //by  default brower setout time is 0ms
},0);
setTimeout(function(){
    console.log('C'); 
},0); 
setTimeout(function(){
    console.log('D'); 
},0); 
//A,B,C,D
// reduce without intizilation


let arr = [1,2,3,4,5];

let sum = arr.reduce(function(acc, curr){
       return acc+ curr;
})
console.log(sum); 

//first value taken as to  be initilzation value of accumulator and at the time of looping it will  not consider first value 
//we need to consider this condition  in the pollyfills
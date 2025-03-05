//! implementation  of  Map,reduce is Polyfills 

 //ForEach:->high order function(which takes callback as an  argument  )
 
// const names  = ['Mark', 'Steve' , 'John'];

// names.forEach(function(ele){
//     console.log(ele);
// })



//write our own  forEach

// we have to  add the inside the prototype
const names  = ['Mark', 'Steve' , 'John'];
Array.prototype.myforEach = function(callback){
   for(let i =0;i<this.length;i++){
        callback(this[i])

        //callback  ->cb
   }
}

function cb(name){
    console.log(name);
}

names.myforEach(cb); //names array



//we need an  array takes a  callback fn  and loops through  the array
//gets the element one by one
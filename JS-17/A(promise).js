//Syntac of Promise
//a promise is an object
console.log('start');

let myPromise  = new Promise(function(resolve, reject){
        const a =5
        const  b =5

        if(a==b){
            resolve('Yes they are Equal') //Fullfilled
        }
        else{
            reject('No they are not Equal') //rejected
        }
})

console.log(myPromise);


////////////////////
 //to settled the message we need to use then and catch
 //!then and catch
myPromise.then(function(result){ //work with resolve
     console.log(result);
     
}) //fulfilled and settled

myPromise.catch(function(err){ //work with reject
    console.log(err); 
}) //rejected and settled


console.log("end");

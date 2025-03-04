console.log('start');

let myPromise  = new Promise(function(resolve, reject){
        const a =5
        const  b =5

        if(a==b){
            resolve('Yes they  are Equal') //Fullfilled
        }
        else{
            reject('No they are not Equal') //rejected
        }
})

console.log(myPromise);

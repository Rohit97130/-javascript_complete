let car = {
    name: 'Mercedes',
    color: 'White'
}

function buyCar(price, pp ){
    console.log(`I brougth a ${this.name} ${this.color} of ${price} `);   
}

Function.prototype.myapply = function(context={},args =[]){
    //this keyword is pointing to buycar fn

    if(typeof this !== 'function'){
      throw new Error( this + 'is not callable')
    }
    if(!Array.isArray(args)){
        throw new Error(this + 'We need an array for args');
    }
     context.fn = this;
     context.fn(...args);

     delete context.fn;
}

buyCar.myapply(car,1000);
console.log(car);







////////////////
let obj = {name:"tim"}

let arr = [1,2,3,4]

let ans = Array.isArray(obj);
// console.log(ans);




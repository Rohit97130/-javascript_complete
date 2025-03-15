//!polyfills of Call

let car = {
    name: 'Mercedes',
    color: 'White'
}

function buyCar(price){
    console.log(`I brougth a ${this.name} ${this.color} of ${price}`);   
}

Function.prototype.mycall = function(context={},...args){
    //this keyword is pointing to buycar fn

    if(typeof this !== 'function'){
      throw new Error( this + 'is not callable')
    }
      
    // context ->car 
    // let car ={
    //     name: 'Mercedes',
    //     color: 'White'
    //     fn: buycar
    // }

     context.fn = this;
     context.fn(...args);

     delete context.fn;
}

buyCar.mycall(car, 30000);
console.log(car);
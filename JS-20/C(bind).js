//!bind polyfills

let car ={
    name: "BMW",
    location:"jabalpur"
}

function buycar(price){
    console.log(`I want to  purchase ${this.name} in ${this.location} location and price is ->${price}`);
}

Function.prototype.mybind= function(context={},...args){
    if(typeof this!== 'function'){
        throw new Error('It not collabble');
    }
    context.fn = this;
    return function(...arg2){
        context.fn(...args,...arg2);
        // delete context.fn; 
     };
}
let ans = buycar.mybind(car);

ans(30000); 
console.log(car);
ans(40000);
ans(2000);
console.log(car);





//!Another method of implementation


let car2 ={
    name: "BMW",
    location:"jabalpur"
}

function buycar2(price){
    console.log(`I want to  purchase ${this.name} in ${this.location} location and price is ->${price}`);
}

Function.prototype.myBind2 = function(...args){
    let fn =this

    return function(...args2){
        fn.call(args[0],...args.slice(1),...args2);
    }
}
let bindedFn = buycar2.myBind2(car2,3000);
bindedFn(2000);


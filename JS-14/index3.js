//! constructor function 


function Car(model, color){
        this.model = model;
        this.color = color;
        this.getdetails = function(){
            return `Carrr model is ${this.model} and color is ${this.color}`;
        }
    }

    Car.prototype.getmodelname = function(){   
        return `Model is ${this.model}`;
    }


function SuperCar(features, price ,model , color){
        Car.call(this,model ,color); //TODO :this is equivalent to  the super
        this.features = features;
        this.price = price;
     }
     
SuperCar.prototype = Object.create (Car.prototype);//TODO : equivalent to  extends
SuperCar.prototype.constructor = SuperCar;
SuperCar.prototype.getOnRoadPrice = function(){
    return this.price +100000;
}


const Mercedes = new SuperCar(['f1','f2'],2000000,"Mercedes","Black");


console.log(Mercedes.getOnRoadPrice());
console.log(Mercedes.__proto__);




///////////////////////////
//! hasOwnProperty

console.log(Mercedes.hasOwnProperty('color'));


console.log(Mercedes.hasOwnProperty('price'));
console.log(Mercedes.hasOwnProperty('getOnRoadPrice'));//! you  can access it but it is not your part (It is with  prototype or ancestor)
console.log(Mercedes.hasOwnProperty('getdetails'));
 
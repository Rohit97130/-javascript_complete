 //!Constructor function :- prototype function

 function Car(model, color){
    this.model = model;
    this.color = color;
    this.getColor = function() { 
        return this.color;
    }  
 }
 Car.prototype.getModel = function(){
       return `Model is ${this.model}`;
 }

 const BMWCar = new Car('BMW', 'red');
 console.log( BMWCar.getModel());
 
 
class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getdetails = function(){
            return `Car model is ${this.model} and color is ${this.color}`;
        }
    }
    static tax = "10%"; //?it can be access without creating instance of class or object
}

const BMWCar = new Car('BMW' , 'red');
console.log(BMWCar.color);
console.log(Car.tax);//! we can call  it directly
Car.tax = "30%";
console.log(Car.tax);//! we can call  it directly

//! BMWCar.tax  you  can not because it is not the  part of instance




/////////////////////////////
//TODO: access modifier
// there is no access modifier in js







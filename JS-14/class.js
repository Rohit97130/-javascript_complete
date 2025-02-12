//TODO: class

class car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getdetails = function(){
            return `Car model is ${this.model} and color is ${this.color}`;
        }
    }
}

const BMWCar = new car('BMW','red');
const tesla =  new car('lucid', 'white')
console.log(BMWCar.color);
console.log(tesla.getdetails());




////////////////////////
//!define method outside the constructor

class car2{
    constructor(model, color){
        this.model = model;
        this.color = color;
    }
    getdetails(){  //get into the prototype object(chain)
        return `Car model is ${this.model} and color is ${this.color}`;
    }
}

const BMWCar2 = new car2('BMW2','red2');
const tesla2 =  new car2('lucid2', 'white2')
console.log(BMWCar2);
console.log(tesla2.getdetails());
console.log(BMWCar2.hasOwnProperty());// inside the prototype chain

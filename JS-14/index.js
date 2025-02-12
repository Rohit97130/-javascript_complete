class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getdetails = function(){
            return `Carrr model is ${this.model} and color is ${this.color}`;
        }
    }

    getmodelname(){  //!prototypical inheritance 
        return `Model is ${this.model}`;
    }
}

class SuperCar extends Car {
     constructor(features, price ,model , color){
        super(model , color);
        this.features = features;
        this.price = price;
     }
}
const BMWCar = new SuperCar(['f1'],1000,"BMW","red");
const Mercedes = new SuperCar(['f1','f2'],2000000,"Mercedes","Black");
console.log(BMWCar.getmodelname()); //!prototypical inheritance both  of them (BMW and mercedes) shared the same reference with parent prototype it does not copy  inside the ezch instance
console.log(BMWCar);
console.log(Mercedes);



console.log(Mercedes.getdetails === BMWCar.getdetails); // false
console.log(Mercedes.getmodelname === BMWCar.getmodelname); // true 
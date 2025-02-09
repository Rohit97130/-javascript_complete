
// !different way  to  design  an  (object literal)
const marriage ={
    name: "Atul",
    age: 30,
    isWorking:false,
    address:{
        city:"Patna"
    },
    getDetails: function(){
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;

    }
};
// console.log(marriage);
 


//////////////////////
// TODO: another way of making the objext using (contructor way) or (constructor function)

function Person(name,age,company, address){
    this.name = name;
    this.age = age;
    this.company = company; 
    this.address = address;
    this.getDetails = function(){
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
    };
}


const AtulMarriageDetail = new Person('Atul',30,'NA',{city: 'patna'}); 

const vivekMarriageDetail = new Person('vivek',24,'Sixsails',{city: 'Delhi'}); 

console.log(AtulMarriageDetail);






//////////////////////////
//TODO: 3rd way  of creating object (using class)
//! in js there is no  concept of class it is just an synthetic sugar so  that user may not find difficulty ES6
class marriageDetail{
    constructor(name,age,company, address){
        this.name = name;
        this.age = age;
        this.company = company; 
        this.address = address;
        this.getDetails = function(){
            return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
        };
    }
}

const rohitmarriage = new marriageDetail('rohit', 21, 'Cisco',{city:'Jabalpur'});
console.log(rohitmarriage);


 
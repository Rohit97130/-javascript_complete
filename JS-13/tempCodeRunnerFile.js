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


 
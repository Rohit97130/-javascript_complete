// // create an objects you will  use curly  braces

let person1 = {
      name:  'ROhit',
      age: 26,
      OwnsAcar :  false,
      carName: null
}


let person2 = {
    name: 'Mark',
    age: 30,
    OwnsAcar :  true,
    carName : undefined, 
    phoneNo: 9713058107 
}
console.log(person1);
console.log(person2);

















////////////////////////////

// new topics


let captainAmerica ={
     name : 'Steve Rogers',
     age: 102,
     friends: ['Tony  Stark' , 'BUcky  Barnes' , 'Bruce Bannner'],

     address : {
         country: 'Usa',
         city :  {
            name: 'Brooknly',
            pincode : 2345
         },
     },
   
    isAvenger:true
}


// Access key  and values of an object
// dot Notataion 
console.log(captainAmerica.friends[1]);
 console.log(captainAmerica.age,captainAmerica.friends +" "+ captainAmerica.age)
console.log(captainAmerica.address.city.name); 

 


// bracket Notataion
console.log(captainAmerica['age']);
console.log(captainAmerica['friends'][1]);
console.log(captainAmerica['address']['country']);
console.log(captainAmerica['address']['city']['name']);




// adding new key  value into  the object 
captainAmerica.movies = ['End Game' , 'Civil War' , 'Winter Soldier'];
console.log(captainAmerica);

// change the value
captainAmerica.isAvenger = false

// delete the key-value
delete captainAmerica.age
console.log(captainAmerica);



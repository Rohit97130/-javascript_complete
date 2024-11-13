//  function  firstname(name){
//      console.log(name);
     
//  }
//  firstname('rohit');


//Call  back function  -  passed a funcion  as an  argument   
 function printFirstName(firstname , cb1 , cb2 ){  // higher order function
    console.log(firstname);
    cb1('Smith') //printlastName invoked
    cb2(20);      // printAge
 }

 function printLastName(lastname){   //call back function 
    console.log(lastname);
 }

 function printAge(age){
    console.log(age);
 }
 printFirstName('Adam',printLastName,printAge)


 
  
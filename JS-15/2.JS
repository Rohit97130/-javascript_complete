const a = {
    firstName: "Atul",
    lastName : "Jha",
    address: {
        city: "patna",
        state: "Bihar"
    } 
}

// const  b =a; 





////////////////////
// shallow copy
/* const  b = {...a}; // a.slice(); 
a.lastName = "patil";

console.log(a,b); //Patil , Jha


//!both a and b  will  be change becuase it copy  only first level things it dont not impact the nested level things.in case of address obj  both  a and b  sill  reference to the same object
a.address.city = "Australia"; 
console.log(a,b); //  
*/ 






////////////////////////
//Deep  copy part 1
/* const  b = {...a};  //shallow copy of 'a'
b.address = {...a.address}; //Deep copy of 'address'

a.address.city = "Australia"; 
console.log(a,b); 
*/ 



//////////////////////
//Deep copy  part 2 -> slow but good for small  dataset

const a = {
    firstName: "Atul",
    lastName : "Jha",
    address: {
        city: "patna",
        state: "Bihar"
    } 
}

//!when  you  convert into  JSON string then  it cuts all  the reference of non  promitive datatype and  when  it again  convert back into  the object it create a new reference
//TODo object  --> JSON string --> object
console.log(JSON.stringify(a));

const b = JSON.parse(JSON.stringify(a));

a.lastName = "Patil";

a.address.city ="Australia";
console.log(a,b);




//TODO: example7

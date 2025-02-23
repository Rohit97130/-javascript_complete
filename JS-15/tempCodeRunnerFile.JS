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
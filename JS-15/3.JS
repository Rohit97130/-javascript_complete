let obj = { 
    name: "Alice",
    birthDate: new Date(),
    greet: function() { return "Hello"; }
  };
  
  let copy = JSON.parse(JSON.stringify(obj));
  
  console.log(copy.birthDate); // "2025-02-18T12:00:00.000Z" (Converted to string)
 // undefined (Function is removed)
  
      // new topic 
       let arr = [ 2,3,4,5,6]

       // call back function
       let circularArea = function (radius){  
        return 3.14 * radius * radius; 
      }  
       function circleCircumference(radius){
        return  2*3.14*radius; 
      }  
       function circleDiameter(radius){
        return 2*radius; 
      }  
      
      
      // let area2 = arr.map(circularArea);
      console.log(arr.map(circularArea));
      







     // use high order function  to  solve problem.js problem
    // it is an  high order function
      function  calculate(arr,cb){
      let res = []

      for(let i=0;i<arr.length;i++){
           res.push(cb(arr[i]));
      }
      return  res;
} 

      // because it passes a function as a argument 
 let Area = calculate(arr,circularArea);
 let circumference = calculate(arr,circleCircumference);
 let Diameter= calculate(arr,circleDiameter); 
 
console.log(Area);
console.log(circumference);
console.log(Diameter);






 
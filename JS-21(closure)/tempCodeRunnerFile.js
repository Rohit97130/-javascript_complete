function addPartial(a,d){
   return function(b,c){
     return function(f,g,h){
        console.log(a+b+c+d+f+g+h);
     }
   }
}
addPartial(1,2)(3,4)(5,6,7);
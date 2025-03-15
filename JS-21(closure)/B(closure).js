function parent(){
    var a  =10

    function child1(){
       console.log(a);
    }
    return child1;
}
    //even though it return outside from  parent function but still  this child1 function has  still hold the property  of lexical scoping 
    //TODO: this is called closure-> a function is always bounded with this lexial environment or scope

    let returnFn = parent();
    console.log(returnFn);
    returnFn();



// Debouncing , Module Design Pattern


    //Currying and Partial Application
    

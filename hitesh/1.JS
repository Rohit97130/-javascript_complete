//!Lexical  Scoping

function outer(){
    let username = "hitesh"
    function inner(){
        console.log("inner", username);
    }

    function innerTwo(){
        console.log("inner2", username);   
    }
    inner()
    innerTwo()
}
outer()


// TODO: closure 
function makeFunc(){
    const name= "Mozilla";

    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();







/////////////////////////
 
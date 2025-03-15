
//lexical scoping
function a(){
    function b(){
        var c =15;
        function d(){
            console.log(c); //lexical scoping
        }
        d();
    }
    b()
}
a(); 


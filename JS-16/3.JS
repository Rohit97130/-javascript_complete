//QUestion 5:

//write a function countdowWithClear that takes a positive interger n as a argument.
//The function should log the numbers from  n  down to  1, with a delay  of 1000 milliseconds
//between each log. however , the function should stop logging after 5 seconds 
// (i.e.,when  it has logged n, n-1, ....., n-5).

let count =0;
function  countdowWithClear(n){
    let ID = setInterval(function(){
     console.log(n--);
     count++;
     if(count===5){
        clearInterval(ID);
     }
    },1000);
    
}
countdowWithClear(5);
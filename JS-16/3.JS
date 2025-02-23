//QUestion 5:

//write a function countdowWithClear that takes a positive interger n as a argument.
//The function should log the numbers from  n  down to  n-1, with a delay  of 1000 milliseconds
//between each log. however , the function should stop logging after 5 seconds 
// (i.e.,when  it has logged n, n-1, ....., n-5).

function countdowWithClear1(n){
    for(let i =n ; i>n-5;i--){
       setTimeout(function(){
          console.log(i);
          
       },1000*(n-i +1));
    }
}
countdowWithClear1(5); 


let count =0;
function  countdowWithClear2(n){
    let ID = setInterval(function(){
     console.log(n--);
     count++;
     if(count===5){
        clearInterval(ID);
     }
    },1000);
    
}
countdowWithClear2(5);
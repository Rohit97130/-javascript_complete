let count =0;
function  countdowWithClear(n){
    let ID = setInterval(function(){
     console.log(n--);
    //  n--;
     count++;
     if(count===5){
        clearInterval(ID);
     }
    },1000);
    
}
countdowWithClear(5);
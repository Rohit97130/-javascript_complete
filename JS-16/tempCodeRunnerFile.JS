function countdowWithClear1(n){
    for(let i =n ; i>n-5;i--){
       setTimeout(function(){
          console.log(i);
          
       },1000*(n-i +1));
    }
}
countdowWithClear1(5);
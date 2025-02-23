//Ouestion 1:


//SetTimeout or setInverval?


function continousAnimation(id){
     let count = 0;

     setInterval(function(){
        const newColor = count%2 ===0?'red':'blue';
        changeColor(id, newColor);
        count++;
     },500);
}

function changeColor(id,color){
     document.getElementById(id).style.backgroundColor = color;
}

continousAnimation('dd');





//Question  2:

//!settimeout work only  after call stack is empty
for(var i=0; i<5;i++){
     setTimeout(function(){
        console.log(i);    
     });
} 
//55555

//Question 3:

var obj = {
    name: 'Nirmal', 
    logdetails:function(){
        setTimeout(function(){ //call according to the window object or global object
            console.log(this);    
         });
    }
}

obj.logdetails();//window in asynchronous


//Question 4:
for(let i=0; i<5;i++){
     setTimeout(function(){
        console.log(i);   
     });
} 



//!Promise problem

function placeOrder(drink){
     return new Promise(function(resolve,reject){
       if(drink=="coffee"){
        resolve("Order has been Placed");
       }
       else{
        reject("reject the order as Iten is not avilable");
       }
})
}

function processOrder(orderPlaced){
   return new Promise(function(resolve){
     setTimeout(()=>{
         resolve(`${orderPlaced} and Served`);
     },3000)
   })
}


//Promisifid way  by using then and catch
// placeOrder('coffee').then((orderTaken)=>{
//    console.log(orderTaken);
//    return  processOrder( orderTaken);
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);  
// })

//!we can solve this async and await

async function serveOrder(){
    try{
          
        let orderTaken = await placeOrder('coffee');
        console.log(orderTaken);
        
        let processedorder = await processOrder(orderTaken);
        console.log(processedorder);
    }
    catch (err){
     console.log(err);
     
    }
    
}
serveOrder();
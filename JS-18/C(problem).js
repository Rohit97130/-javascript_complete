function ordertaken(drink){
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
    resolve(`${orderPlaced} and Served`);
  })
}


async function serveOrder(){
    let 
}
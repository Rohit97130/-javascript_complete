ordertaken('Coffe').then(function(orderTaken){
    console.log(orderTaken);
    return orderTaken
}).then(function(orderTaken){
    let orderIsProcessed = processOrder(orderTaken)
    return orderIsProcessed 
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed);
})
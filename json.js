//array json

var orders = [ { "name" : "chain", "description" : "necklace chain", "status": "shipped"} , {"name": "pen", "description" : "ball pen", "status": "shipped"}, {"name": "book", "description" : "travel diary", "status": "delivered"}];
console.log(orders); 
var orderInfo = orders.map( function(order) {
 if( order.status === "delivered"){
     var info = { "orderName": order.name,
                  "orderDesc": order.description
                 }
     return info;
 }
});
console.log(orderInfo);



let Customer = require("./index");

let mockData = Customer.get({type:"GET_BY_ID", param: "abc123"});
console.log(mockData);
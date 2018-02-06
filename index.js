let math = require("mathjs")

class Customer{
    static get(id){
        if(!id || id.trim().length == 0) return null;

        return {
            customer_name: "Leandro Curzi",
            customer_location: "Buenos Aires",
            customer_age: math.sqrt(64)
        }
    }
}

module.exports = Customer;
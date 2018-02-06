let math = require("mathjs")

class Customer{

    /**
     * Generic handler for all GET requests in this service
     * @param {*} query = {
     *      type: String,
     *      param: Object
     * } 
     */
    static get(query){
        let result = {status: false, resp: null};

        switch(query.type){
            case "GET_BY_ID": 
                result.resp = this.getById(query.param);
                result.status = true;
            break;

            case "GET_BY_PHONE":
                result.resp = this.getByPhone(query.param);
                result.status = true;
            break;
        }

        return result;
    }

    static getById(id){
        return {name: "Leandro Curzi", phone: "123-456-7890"};
    }

    static getByPhone(phoneNum){
        return {name: "Leandro Curzi", id: "abc1234"};
    }
}

module.exports = Customer;
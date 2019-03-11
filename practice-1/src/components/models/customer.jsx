import Entity from "./entity";

class Customer extends Entity {
    constructor(id,firstName, lastName){
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

export default Customer;
import { AbstractCustomer } from "../customer/abstract_customer";

// Variant of the Customer Product - Individual client 

export class IndividualCustomer implements AbstractCustomer {
    constructor(public name: string) { }

}   
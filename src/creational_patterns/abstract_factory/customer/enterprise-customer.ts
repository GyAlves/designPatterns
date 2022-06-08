import { AbstractCustomer } from "../customer/abstract_customer";

// Variant of the Customer Product - Enterprise client 

export class EnterpriseCustomer implements AbstractCustomer {
    constructor(public name: string) { }

}   
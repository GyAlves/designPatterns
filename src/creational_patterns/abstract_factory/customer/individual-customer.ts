import { AbstractCustomer } from "../interfaces/abstract_customer";

export class IndividualCustomer implements AbstractCustomer {
    constructor(public name: string) { }

}   
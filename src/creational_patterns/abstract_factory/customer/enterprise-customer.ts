import { AbstractCustomer } from "../interfaces/abstract_customer";

export class EnterpriseCustomer implements AbstractCustomer {
    constructor(public name: string) { }

}   
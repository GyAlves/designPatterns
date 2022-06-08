import { AbstractCustomer } from "../customer/abstract_customer";
import { AbstractVehicle } from "../vehicle/abstract_vehicle";

// Variant of the Vehicle Product - Enterprise Car

export class EnterpriseCar implements AbstractVehicle {

    constructor(public name: string, private readonly customer: AbstractCustomer) { }

    pickUp(): void {
        console.log(`O carro de luxo ${this.name} está buscando ${this.customer.name}`)
    }

}
import { AbstractCustomer } from "../customer/abstract_customer";
import { AbstractVehicle } from "../vehicle/abstract_vehicle";

// Variant of the Vehicle Product - Individual Car
export class IndividualCar implements AbstractVehicle {

    constructor(public name: string, private readonly customer: AbstractCustomer) { }

    pickUp(): void {
        console.log(`O seu carro básico ${this.name} está buscando ${this.customer.name}`)
    }

}
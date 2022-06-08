import { AbstractCustomer } from "../customer/abstract_customer";
import { IndividualCustomer } from "../customer/individual-customer";
import { AbstractVehicle } from "../vehicle/abstract_vehicle";
import { IndividualCar } from "../vehicle/individual-car";

export class IndividualCreateVehicleCustomerFactory {
    createCustomer(customerName: string): AbstractCustomer {
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): AbstractVehicle {
        const customer = this.createCustomer(customerName);

        return new IndividualCar(vehicleName, customer);
    }
}
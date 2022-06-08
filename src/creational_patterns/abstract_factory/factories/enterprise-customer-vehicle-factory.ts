import { AbstractCustomer } from "../customer/abstract_customer";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { AbstractVehicle } from "../vehicle/abstract_vehicle";
import { EnterpriseCar } from "../vehicle/enterprise-car";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): AbstractCustomer {
        return new EnterpriseCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): AbstractVehicle {
        const customer = this.createCustomer(customerName);

        return new EnterpriseCar(vehicleName, customer);
    }
}
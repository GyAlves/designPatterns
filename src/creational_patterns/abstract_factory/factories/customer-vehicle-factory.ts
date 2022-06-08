import { Vehicle } from "../../factory/vehicle/vehicle";
import { AbstractCustomer } from "../customer/abstract_customer";


// Abstract Factory 
export interface CreateVehicleCustomer {
    createCustomer(customerName: string): AbstractCustomer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}
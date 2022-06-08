import { Vehicle } from "../vehicle/vehicle";


/**
 * // This is the CREATOR class
 *  - MUst have a method that return the a new product. Ex: getVehicle

 * Abstract 
 *  - Used to define common behaviors for derived classes to extend
 *  - An abstract class cannot be instantiated directly.
 *  - When using the abstract declaration it forces all subclasses to implement their own version of the method. 
 */

export abstract class VehicleFactory {

    // Factory Method - that returns new product objects
    abstract getVehicle(vehicleName: string): Vehicle;

    pickUp(customerName: string, vehicleName: string): Vehicle {
        const car = this.getVehicle(vehicleName);
        car.pickUp(customerName);

        return car;
    }
}
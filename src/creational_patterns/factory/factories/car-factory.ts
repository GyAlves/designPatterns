import { Car } from "../vehicle/Car";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

// Concrete Creator

export class CarFactory extends VehicleFactory {

    getVehicle(vehicleName: string): Vehicle {
        return new Car(vehicleName);
    }

}
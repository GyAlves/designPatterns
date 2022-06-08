import { Bicycle } from "../vehicle/Bicycle";
import { Vehicle } from "../vehicle/vehicle";
import { VehicleFactory } from "./vehicle-factory";

// Concrete Creator

export class BicycleFactory extends VehicleFactory {
    getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName);
    }

}
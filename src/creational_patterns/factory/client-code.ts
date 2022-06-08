import { BicycleFactory } from "./factories/bicycle-factory";
import { CarFactory } from "./factories/car-factory";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const Audi = carFactory.getVehicle("Audi R8");
const motoca = bicycleFactory.getVehicle("Pop 100");

Audi.pickUp("Jane");
motoca.pickUp("Rafaela");
Audi.stop();
motoca.stop();



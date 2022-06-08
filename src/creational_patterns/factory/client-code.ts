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


// This is a Factory Function - Creates and return a object 
/**
 * - The code outside the dog function does not have access to its properties like it happens in a class
 * - Also solves the problem of wrong references
 */

const dog = () => {
    const sound = "Woof";
    return {
        talk: () => console.log(`Pluto says ${sound} `)
    }
}

const pluto = dog();
pluto.talk();
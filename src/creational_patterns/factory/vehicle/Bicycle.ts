import { Vehicle } from "../vehicle/vehicle";


// Concrete Product 
export class Bicycle implements Vehicle {
    constructor(private name: string) { }

    pickUp(customerName: string): void {

        console.log(`O motorista de bicicleta: ${this.name} está buscando ${customerName}`);
    }
    stop(): void {
        console.log(`A bicicleta: ${this.name} parou`);
    }


}
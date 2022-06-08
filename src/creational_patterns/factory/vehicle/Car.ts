import { Vehicle } from "./vehicle";


// Concrete Product - A different implementation of the product interface
export class Car implements Vehicle {
    constructor(private name: string) { }

    pickUp(customerName: string): void {
        console.log(`${this.name} está buscando ${customerName}`);
    }

    stop(): void {

        console.log(`${this.name} parou`);
    }
}
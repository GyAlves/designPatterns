import { MealCompositeInterface } from "../interfaces/meal-composite-interface";

export abstract class AbstractMeal implements MealCompositeInterface {
    constructor(private name: string, private price: number) { }

    getPrice(): number {
        return this.price;
    }
}
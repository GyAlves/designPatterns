import { MealBuilderInterface } from "../interfaces/meal-builder-interface";
import { MealBox } from "./Meal-box";
import { Beans, Beverage, Desert, Meat, Rice } from "./Meals";

export class MainDishBuilder implements MealBuilderInterface {

    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this
    }

    makeMeal(): this {

        const rice = new Rice("Arroz", 5);
        const beans = new Beans("Feijão", 10);
        const meat = new Meat("Steak", 20);

        this._meal.add(rice, beans, meat);

        // Used for method chaining
        return this
    }
    makeBeverage(): this {
        const beverage = new Beverage("Soda", 8);
        this._meal.add(beverage);

        return this
    }
    makeDesert(): this {
        const dessert = new Desert("CheeseCake", 18);
        this._meal.add(dessert);

        return this
    }

    getMeal(): MealBox {
        return this._meal
    }

    getPrice(): number {
        return this._meal.getPrice();
    }

}
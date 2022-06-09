import { MainDishBuilder } from "./classes/Main-dish-builder";

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDesert().makeBeverage();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());
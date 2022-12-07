import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Beverege, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Arroz", 10);
    const meat = new Meat("Arroz", 20);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverege("Bebida", 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 7);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}

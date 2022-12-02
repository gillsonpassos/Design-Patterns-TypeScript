import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";

const carFactory = new CarFactory();
const customerName = ["Ana", "Joana", "Helena", "Gilvana"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerName[randomNumbers(customerName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo Carro - ${randomNumbers(100)}`);
  newCar.stop();
  console.log("---");
}

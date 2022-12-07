import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "Molusco", "20A", "Av Brasil", "SP");
deliveryContext(factory, "Sirigueijo", "20A", "Av Brasil", "SP");
deliveryContext(factory, "Eliana", "502", "Rua A", "MG");

console.log();
console.log(factory.getLocations());

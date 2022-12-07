import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from "./delivery-types";
import { DeliveryFlyweight } from "./delivery-flyweight";
import { DeliveryLocation } from "./delivery-location";

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private creatId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, "").toLocaleLowerCase())
      .join("_");
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.creatId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}

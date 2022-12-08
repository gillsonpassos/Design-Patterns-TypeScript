import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightintensityCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.Light.increaseIntensity();
    console.log(`Intencidade de ${this.Light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.Light.decreaseIntensity();
    console.log(`Intencidade de ${this.Light.name} é ${intensity}`);
  }
}

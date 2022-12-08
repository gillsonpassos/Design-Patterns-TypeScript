import { SmartHouseCommand } from "./smart-house-command";
import { SmartHouseLight } from "./smart-house-light";

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    this.Light.on();
  }

  undo(): void {
    this.Light.off();
  }
}

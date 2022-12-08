import { LightintensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

//  Reciver
const bedroomlight = new SmartHouseLight("Luz do Quarto");
const bethroomlight = new SmartHouseLight("Luz do Banheiro");

// Command
const bedroomlightPowerCommand = new LightPowerCommand(bedroomlight);
const bethroomlightPowerCommand = new LightPowerCommand(bethroomlight);
const bedroomIntensityCommand = new LightintensityCommand(bedroomlight);
// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", bedroomlightPowerCommand);
smartHouseApp.addCommand("btn-2", bethroomlightPowerCommand);
smartHouseApp.addCommand("btn-3", bedroomIntensityCommand);

smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.executeCommand("btn-2");
smartHouseApp.undoCommand("btn-2");

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand("btn-3");
}

for (let i = 0; i < 5; i++) {
  smartHouseApp.undoCommand("btn-3");
}

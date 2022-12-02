import { individualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";
import { Customer } from "../customer/customer";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new individualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}

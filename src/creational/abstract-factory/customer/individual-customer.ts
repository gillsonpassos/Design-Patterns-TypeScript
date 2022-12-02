import { Customer } from "./customer";

export class individualCustomer implements Customer {
  constructor(public name: string) {
    this.name += " (INDIVIDUAL) ";
  }
}

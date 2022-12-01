interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAdress(adress: Address): void {
    this.addresses.push(adress);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const addresses1 = new Address("Av Brasil", 19);
const person1 = new Person("Gilson", 50);
person1.addAdress(addresses1);
const person2 = person1.clone();

person1.addresses[0].street = "Bla bla bla";

person2.name = "pirulito";
console.log(person2);
console.log(person2.addresses);

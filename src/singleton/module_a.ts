import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "sirigueijo", age: 100 });
myDatabaseClassic.add({ name: "Molusco", age: 80 });
myDatabaseClassic.add({ name: "Patrick", age: 40 });

export { myDatabaseClassic };

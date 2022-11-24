import { MyDatabaseFunction } from "./db/my-database-function";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Roberto", age: 100 });
myDatabaseClassic.add({ name: "Bob-esponja", age: 80 });
myDatabaseClassic.add({ name: "Palhaço", age: 40 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

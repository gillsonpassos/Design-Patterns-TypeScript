function Person(firstname, lastName, age) {
  this.firstName = firstname;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Gilson",
  lastName: "Passos",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "OIE";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person("gilson", "passos", 56);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson("Arly", "Gonçalves", 52);
console.log(person2);
console.log(person2.fullName());

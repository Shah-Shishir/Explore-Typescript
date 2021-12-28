"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
// Arrays
let ids = [1, 2, 3, 4, 5];
// Tuples
let person = [1, 'Brad', true];
// Tuple Array
let employees = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Unions
let userId = 22;
// Enums
var Id;
(function (Id) {
    Id[Id["first"] = 0] = "first";
    Id[Id["second"] = 1] = "second";
    Id[Id["third"] = 2] = "third";
    Id[Id["fourth"] = 3] = "fourth";
})(Id || (Id = {}));
var Value;
(function (Value) {
    Value[Value["first"] = 1] = "first";
    Value[Value["second"] = 2] = "second";
    Value[Value["third"] = 3] = "third";
    Value[Value["fourth"] = 4] = "fourth";
})(Value || (Value = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
const user = {
    id: 2,
    name: 'Shishir'
};
console.log('user: ', user);
// Type Assertion
let cid = 1;
/*  THIS IS ALSO CORRECT
            let customerId = <number> cid;
 */
let customerId = cid;
console.log('Customer Id: ', customerId);
// Functions
function addTwoNumbers(x, y) {
    return x + y;
}
const user1 = {
    id: 2,
    name: 'Shishir'
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log('Sum: ', add(3, 2));
console.log('Difference: ', subtract(3, 2));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const firstPerson = new Person(1, 'Shishir');
const secondPerson = new Person(2, 'Sarmin');
console.log(firstPerson, secondPerson);
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const firstEmployee = new Employee(1, 'Shishir', 'Developer');
console.log('First employee: ', firstEmployee.name);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'Mosh']);
// numArray.push('any string'); ---> This will show error
// strArray.push(1); ---> This will show error as well

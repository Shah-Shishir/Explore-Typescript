// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

// Arrays
let ids: number[] = [1,2,3,4,5];

// Tuples
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employees: [number, string][] = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// Unions
let userId: number | string = 22;

// Enums
enum Id {
    first,
    second,
    third,
    fourth
}

enum Value {
    first = 1,
    second,
    third,
    fourth
}

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type User =  {
    id: number,
    name: string
}

const user: User = {
    id: 2,
    name: 'Shishir'
}
console.log('user: ', user);

// Type Assertion
let cid: any = 1;
/*  THIS IS ALSO CORRECT
            let customerId = <number> cid; 
 */
let customerId = cid as number;

console.log('Customer Id: ', customerId);

// Functions
function addTwoNumbers(x: number, y: number): number {
    return x + y;
}

// Interfaces
interface UserInterface {
    id: number;
    name: string;
}

const user1: UserInterface = {
    id: 2,
    name: 'Shishir'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

console.log('Sum: ', add(3,2));
console.log('Difference: ', subtract(3,2));

// Classes
interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}

class Person implements PersonInterface {
    id: number;
    name: string;
 
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

const firstPerson = new Person(1, 'Shishir');
const secondPerson = new Person(2, 'Sarmin');

console.log(firstPerson, secondPerson);

// Subclasses
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const firstEmployee = new Employee(1, 'Shishir', 'Developer');

console.log('First employee: ', firstEmployee.name);

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['Brad', 'Mosh']);

// numArray.push('any string'); ---> This will show error
// strArray.push(1); ---> This will show error as well
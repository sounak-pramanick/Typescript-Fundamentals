"use strict";
// console.log('typescript is here');
// const person = {
//     name: 'John',
//     age: 21
// }
// console.log(`${person.name} is ${person.age} years old`);
// console.log('Hello World');
// classes in TS
class User {
    constructor(email, name) {
        this.city = 'New York';
        this.email = email;
        this.name = name;
    }
}
const john = new User('john@email.com', 'John');
john.city = 'LA';

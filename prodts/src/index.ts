// console.log('typescript is here');
// const person = {
//     name: 'John',
//     age: 21
// }
// console.log(`${person.name} is ${person.age} years old`);
// console.log('Hello World');

// classes in TS
// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = 'New York';

//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// const john = new User('john@email.com', 'John');
// john.city = 'LA';


// another syntax of class which is most used
// class User {
//     readonly city: string = 'New York';

//     constructor(
//         public email: string, 
//         public name: string,
//         private userId: string
//         ) {
//     }
// }
// const john = new User('john@email.com', 'John', '123');

// getters and setters
class User {
    private _courseCount = 1;

    readonly city: string = 'New York';

    constructor(
        public email: string, 
        public name: string,
        private userId: string
        ) {
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = courseNum;
    }

    private deleteToken() {
        console.log('Token deleted');
    }
}
const john = new User('john@email.com', 'John', '123');
// john.deleteToken();
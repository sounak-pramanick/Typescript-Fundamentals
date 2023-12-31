function detectType(val: string | number) {
    if(typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}


// still one case is missing, which is if strs is empty string
// which here will correspond to null
function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs === 'object') {
            for(const s of strs) {
                console.log(s);
            }
        }
        else if(typeof strs === 'string') {
            console.log(strs);
        }
    }
}


// using in operator for narrowing
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin;
    }
}



// narrowing using instanceof
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

// Type Predicates
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        console.log("fish food");
    }
    else {
        pet
        console.log("bird food");
    }
}

// discriminated unions
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    
    // return shape.side * shape.side;
}

// never type and exhaustive checking
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.length * shape.width;

        default:
            const _defaultForShape: never = shape;
            return _defaultForShape;
    }
}
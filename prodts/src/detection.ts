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


interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(s: string, n: number): string,
    getCoupon(couponName: string): number
}


// this is called re-opening of interface
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const john: User = {
    dbId: 10,
    email: 'john@email.com',
    userId: 1000,
    startTrial: (str: string, num: number) => {
        return 'trial started'
    },
    getCoupon(name: string) { // we don't need to match the parameter name with the interface
        return 10;
    },
    githubToken: 'github'
}

/*
tsc --init
npm init -y

*/

const jane: Admin = {
    dbId: 10,
    email: 'john@email.com',
    userId: 1000,
    startTrial: (str: string, num: number) => {
        return 'trial started'
    },
    getCoupon(name: string) { // we don't need to match the parameter name with the interface
        return 10;
    },
    githubToken: 'github',
    role: 'admin'
}

// cannot modify readonly field
// john.dbId = 1; 


export {};
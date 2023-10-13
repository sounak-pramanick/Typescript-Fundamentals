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



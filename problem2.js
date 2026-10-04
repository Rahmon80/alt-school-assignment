function diffobject(oldobject, newobj) {
    let result = {
        added: {},
        removed: {},
        changed: {}
    };

    for (let key in new obj) {

        if (!(key in oldobj)) {
            result.added[key] = newobj[key];
        }
        else if (oldobj[key]!== newobj[key]) {
         result.changed[key] = {
            from: oldobj[key],
            to: newobj[key]
         };
        }
    }

    for (let key in oldobj) {
        if (!(key in oldobj)){
            result.removed[key] = oldobj[key];
        }
    }

    return result;
}

const oldobj ={
    name:
    age:
    city:
}



const newobj ={
    name:
    age:
    country:
}

console.log(diffobjects(oldobj, newobj));
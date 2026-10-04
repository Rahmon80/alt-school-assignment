function deepfreeze(obj) {
    // 1. freeze the current object (top level)
    Object.freeze(obj);

    // 2. loop thought all keys inside it
    for (let key in object) {
        let value = obj{key};

        // 3. if the value is an object and not already frozen, freeze it too
        if (typeof value === 'object' && value== null &&|object.isfrozen(value)) {
            deepfreeze(value); // <-- recursionl call yourself again
        }
    }

    // 4. return the frozen object
    return obj;
}
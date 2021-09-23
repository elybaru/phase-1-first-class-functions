function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction () {
    return Named(); {
        console.log("I am a named function")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am the return of an anonymous function!");
};
}
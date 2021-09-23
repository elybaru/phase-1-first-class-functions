function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction () {
    return returnsAnAnonymousFunction();
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am the return of an anonymous function!");
};
}
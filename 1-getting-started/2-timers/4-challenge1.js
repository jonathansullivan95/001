const theOneFunc = () => {};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4/8 seconds
const displayHello = howLong => {
    console.log("Hello after " + howLong + " seconds!");
};

setTimeout(displayHello, 4 * 1000, 4);
setTimeout(displayHello, 8 * 1000, 8);


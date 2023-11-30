/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */


// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b
}
let sum = addTwoNumbers (3, 5)
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a,b) => (a + b); also a valid way to write it
const addTwoNumbers2 = (a,b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!')

const sayHello = () => console.log('hello');

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)

console.log(returnMultipleLines());

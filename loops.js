// Print a message 'hello world' for 3 times

// while loop

// let executions = 0;

// while (executions < 3) {
//     console.log('hello world');
//     executions++;
// }

// --------------

// for loop

// let executions = 0;

// for (; executions < 3;) {
//     console.log('hello world');
//     executions++;
// }

// for (let executions = 0; executions < 3; executions++) {
//     console.log('hello world');
// }
// -------------
// do...while loop

// let executions = 0;
// while (executions < 3) {
//     console.log('hello world');
//     executions++;
// }

// let executions = 5;
// do {
//     console.log('hello world');
//     executions++;
// } while (executions < 3);

// let executions = 0;

// while (true) {
//     console.log('hello world');
//     executions++;

//     if (executions === 3) break;
// }

let numbers = [4, 7, 2, 3, 6, 5, 1];

// named functions
function callbackfn(value, index, array) {
    console.log(value);
}

numbers.forEach(callbackfn);
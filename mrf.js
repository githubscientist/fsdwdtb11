// function square(numbers) {
//     let squares = [];

//     for (let i = 0; i < numbers.length; i++) {
//         squares.push(numbers[i] ** 2);
//     }

//     return squares;
// }

// let numbers = [3, 7, 2, 1, 5, 4];

// // Square each of the number in the array
// // Output: [9, 49, 4, 1, 25, 16]

// // without using map method


// console.log(square(numbers));

// function squarer(value, index, array) {
//     return value ** 2;
// }

// let numbers = [3, 7, 2, 1, 5, 4];

// console.log(numbers.map(squarer));

// function filterEven(value, index, array) {
//     if (value % 2 == 0) {
//         return true;
//     }
// }

// // filter method
// let numbers = [3, 7, 2, 1, 5, 4];

// console.log(numbers.filter(filterEven));

// reduce method
function reducer(previousValue, currentValue) {
    return previousValue + currentValue;
}

// let numbers = [3, 7, 2, 1, 5, 4];

// console.log(numbers.reduce(reducer));

// let numbers = [3, 1, 2, 5, 6, 4, 3, 4, 6, 3, 2, 2, 4];

// // output: [3, 1, 2, 5, 6, 4]

// // console.log(numbers.reduce((p, c) => {
// //     if (!p.includes(c)) {
// //         return [...p, c];
// //     } else {
// //         return p;
// //     }
// // }, []));
// function reducer(p, c) {
//     if (p.includes(c)) {
//         return p;
//     } else {
//         return [...p, c];
//     }
// }


// console.log(numbers.reduce(reducer, []));
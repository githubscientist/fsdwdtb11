/*
    Array Methods:

    - Map
    - Filter
    - Reduce
    - Push
    - Pop
    - Foreach
    - Slice
    - Splice
    - IndexOf

    map method:
        - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    Example 1:

    Given an array of values representing distances in miles, you need to convert them to kilometers. The conversion rate is 1 mile = 1.6 kilometers. Use the map method to perform the conversion. Then, use the filter method to filter out the values that are less than 30 kilometers. Finally, use the reduce method to calculate the total distance in kilometers.

    Example 2:

    Given an array of values, where each value represents the age of the person, you need to square each age value and keep only the ages greater than or equal to 18(adults). Finally, reduce the the list of ages to calculate the average age of the adults.

    ages = [3, 12, 18, 20, 30, 45, 60, 70]
*/

// let numbers = [4, 9, 16, 25, 36];

// let index = 0;
// while (index < numbers.length) {
//     numbers[index] = numbers[index] * 1.6;
//     index++;
// }

// console.log(numbers);

// ------------------------

// let numbers = [4, 9, 16, 25, 36];

// numbers.forEach((number, index, numbers) => {
//     numbers[index] = number * 1.6;
// });

// console.log(numbers);

// ------------------------

// let numbers = [4, 9, 16, 25, 36];

// numbers = numbers.map(number => number * 1.6);

// console.log(numbers);

// ------------------------

// List of distances in miles
// let distancesInMiles = [4, 9, 16, 25, 36];

// let distancesInKilometers = distancesInMiles.map(distance => distance * 1.6);
// // distancesInKilometers = [ 6.4, 14.4, 25.6, 40, 57.6 ]

// let distancesBelow30Kms = distancesInKilometers.filter(distance => distance < 30);

// console.log(Math.ceil(distancesBelow30Kms.reduce((previousDistance, currentDistance) => previousDistance + currentDistance)));

// let distancesInMiles = [4, 9, 16, 25, 36];

// console.log(distancesInMiles.map(distance => distance * 1.6).filter(distance => distance < 30).reduce((prevDistance, currDistance) => prevDistance + currDistance).toFixed(2));

/*
    Given an array of values, where each value represents the age of the person, you need to square each age value and keep only the ages greater than or equal to 18(adults). Finally, reduce the the list of ages to calculate the average age of the adults.

    ages = [3, 12, 18, 20, 30, 45, 60, 70]
*/

// let ages = [3, 12, 18, 20, 30, 45, 60, 70];
// let filteredAges = ages.map(age => age ** 2 % 101).filter(age => age >= 18);

// console.log(Math.floor(filteredAges.reduce((prevAge, currAge) => prevAge + currAge) / filteredAges.length));


let numbers = [3, 4, 6, 7, 8, 1, 2, 5];

numbers.push(10);

numbers.unshift(11);

numbers.pop();

numbers.shift();

numbers.splice(2, 3, 9, 10);

numbers.splice(2, 1);
numbers.splice(2, 1);

console.log(numbers.includes(4));

// console.log(numbers.slice(1, -2));
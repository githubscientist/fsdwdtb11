// const XMLHttpRequest = require('xhr2');

// // create xhr instance
// const xhr = new XMLHttpRequest();

// // open the connection
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// // on load
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.response);
//     }
// }

// // send the request
// xhr.send();

// -------------------------
// using fetch

fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
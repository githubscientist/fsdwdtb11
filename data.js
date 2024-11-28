// function fetchUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log('Error fetching users', error);
//         })
// }

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching users', error);
    }
}

fetchUsers();
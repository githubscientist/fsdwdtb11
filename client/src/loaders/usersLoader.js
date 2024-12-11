const usersLoader = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        return data;
    } catch (error) {
        return null;
    }
}

export default usersLoader;
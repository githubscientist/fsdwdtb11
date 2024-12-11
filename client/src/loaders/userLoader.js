const userLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await response.json();

        return data;
    } catch (error) {
        return null;
    }
}

export default userLoader;
const userLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        const data = await response.json();

        if (response.status === 404) {
            throw new Error('User not found');
        }

        return data;
    } catch (error) {
        return null;
    }
}

export default userLoader;
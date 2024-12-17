const jobsLoader = async () => {
    try {
        const response = await fetch(`https://676195b946efb37323724255.mockapi.io/jobs`);
        const data = await response.json();

        return data;
    } catch (error) {
        return null;
    }
}

export default jobsLoader;
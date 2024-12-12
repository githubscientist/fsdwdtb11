import { useLoaderData } from "react-router-dom";

const Home = () => {

    const todos = useLoaderData();

    console.log(todos);

    return (
        <div>Home</div>
    )
}

export default Home;
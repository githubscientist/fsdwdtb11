import { useLoaderData } from "react-router-dom";

const Home = () => {

    const users = useLoaderData();

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page. This application is to demonstrate the use of React Router DOM.</p>
            <em>Click on the links in the navigation bar to navigate to different pages</em>

            <h3>Contributors</h3>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Home;
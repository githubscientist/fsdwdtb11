import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

    const jobs = useLoaderData();

    console.log(jobs);

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
import { useEffect, useState } from "react";

const Dashboard = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://676195b946efb37323724255.mockapi.io/jobs`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setJobs(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    console.log(jobs);

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
import { useLoaderData, useParams } from "react-router-dom"

const User = () => {

    const user = useLoaderData();

    return (
        <div>
            <h1>User Details:</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

export default User;
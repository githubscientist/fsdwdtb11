import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong</p>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
}

export default Error;
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username..."
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password..."
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
        </div>
    )
}

export default Login;
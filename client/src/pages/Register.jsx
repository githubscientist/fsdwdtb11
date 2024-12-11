import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    function handleNavigateToLogin() {
        navigate('/login');
    }

    return (
        <div>
            <h1>Register</h1>
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
                    <button type="submit">Register</button>
                </div>
            </form>
            <p
                onClick={handleNavigateToLogin}
            >Already have an account? <button>Login</button></p>
        </div>
    )
}

export default Register;
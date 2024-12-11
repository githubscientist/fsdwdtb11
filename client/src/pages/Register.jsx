const Register = () => {
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
        </div>
    )
}

export default Register;
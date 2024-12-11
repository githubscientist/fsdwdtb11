import { Link, Outlet } from "react-router-dom";

const NavWrapper = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default NavWrapper;
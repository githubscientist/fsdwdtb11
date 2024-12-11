import { Outlet } from "react-router-dom";

const NavWrapper = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default NavWrapper;
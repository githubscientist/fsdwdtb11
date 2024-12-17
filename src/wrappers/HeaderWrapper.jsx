import { Outlet } from "react-router-dom";

const HeaderWrapper = () => {
    return (
        <div>
            <h1>Header Wrapper</h1>
            <Outlet />
        </div>
    )
}

export default HeaderWrapper;
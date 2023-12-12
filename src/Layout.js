import { Outlet, Link } from "react-router-dom";

function Layout (){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Jatekok</Link>
                    </li>
                    <li>
                        <Link to="/tiktaktoe">TikTakToe</Link>
                    </li>
                    <li>
                        <Link to="/lighton">LightOn</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;

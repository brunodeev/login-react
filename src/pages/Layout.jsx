import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='/other'>Other Page</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
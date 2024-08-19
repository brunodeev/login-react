import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <div className="card">
                <div className="group">
                    <h1>Vite + React</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/other'>Other Page</Link>
                            </li>
                        </ul>
                    </nav>
                    <button>
                        Aumentar Contagem
                    </button>
                </div>
            </div>

            <Outlet />
        </div>
    );
}
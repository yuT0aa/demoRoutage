import { Link, Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trainings">Trainings</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <hr />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
    const location = useLocation();

    return(
        <>
            <div className='notification_header'>This is the notification area </div>
            
            <header className='header_nav'>
                <div className='logo'>
                    <h1 className='header_title'>Fitness Application</h1>
                </div>

                <nav className='navbar'> 
                    <ul className='nav_links'>
                        {location.pathname !== '/' && (
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        )}
                        {location.pathname !== '/strength' && ( 
                            <li>
                                <Link to="/strength">Strength</Link>
                            </li>
                        )}
                        <li>
                            <a href='#running'>Running</a>
                        </li>
                        <li>
                            <a href='#crossfit'>Crossfit</a>
                        </li>
                        <li>
                            <a href='#performance'>Performance</a>
                        </li>
                        <li>
                            <a href='#shop'>Shop</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
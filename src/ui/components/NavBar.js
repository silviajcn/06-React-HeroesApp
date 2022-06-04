import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import './navbar.css';

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);
    //console.log(user);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand animate__heartBeat" 
                to="/home"
            >
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1653787049/PRACTICAS/HeroesApp/logo-marvel_upneia.webp" alt="logo" className='img-logo' />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => isActive? "active": 'nav-link linksMenu'}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive? "active": 'nav-link linksMenu'}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => isActive? "active": 'nav-link linksMenu'}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="logout">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
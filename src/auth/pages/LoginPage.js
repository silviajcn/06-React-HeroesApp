import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import './login.css';

const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Silvi');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="login-container">
            <div className='capa'>
                <h1 className='text-center'>Heroes App</h1>
                <br />

                <div className='container-btn'>
                    <button 
                        className="btn btn-primary"
                        onClick={ onLogin }
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
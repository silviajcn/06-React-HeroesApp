import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>HEROES</h1>
            <br />
            
            <div className='row'>
                <div className='img-container col-5 mt-5'>
                    <div className='img-container'>

                        <Link to="/marvel">
                            <img
                                src="https://res.cloudinary.com/silviajcn/image/upload/v1653934753/PRACTICAS/HeroesApp/Marvel-Comics-logo_dip9hz.png"
                                alt="DC"
                                className='img-thumbnail img animate__animated animate__fadeInLeft'
                            />
                        </Link>
                        
                    </div>
                </div>

                <div className='img-container col-2 mt-5'>
                    <div className='img-container'>

                        <h2 className='text-center'>Vs.</h2>
                        
                    </div>
                </div>

                <div className='img-container col-5 mt-5'>
                    <div className='img-container'>

                        <Link to="/dc">
                            <img
                                src="https://res.cloudinary.com/silviajcn/image/upload/v1653934754/PRACTICAS/HeroesApp/DC_Comics_logo.svg_yen3rz.png"
                                alt="DC"
                                className='img-thumbnail img animate__animated animate__fadeInRight'
                            />
                        </Link>
                        
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
};

export default HomePage;
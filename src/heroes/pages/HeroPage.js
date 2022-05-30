import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

const HeroPage = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();
    
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]); 

    const onNavigateBack = () => {
        navigate(-1);
    }

    if ( !hero ) {
        return <Navigate to="/home" />
    }
    
    return (
        <div className='row mt-5'>

            <div className='col-3'>
                <img
                    src={ hero.img }
                    alt={ hero.superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> { hero.alter_ego } 
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> { hero.publisher }
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance:</b> { hero.first_appearance }
                    </li>
                    <li className='list-group-item'>
                        <b>Characters:</b> { hero.characters }
                    </li>
                </ul>

            </div>

            <button
                className='btn mt-3 mb-2'
                onClick={onNavigateBack}
            >
                Return
            </button>
            
        </div>
    )
};

export default HeroPage;
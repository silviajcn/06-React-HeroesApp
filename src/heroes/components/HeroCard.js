import React from 'react';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters)
        ? <></>
        : <p>{characters}</p>;
}

const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    img
}) => {

    //const heroImageUrl = `../../../public/assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ img } className="card-img" alt={ superhero } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/heroe/${ id }`}>
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
};

export default HeroCard;
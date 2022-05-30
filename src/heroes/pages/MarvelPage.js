import React from 'react';
import HeroList from '../components/HeroList';

const MarvelPage = () => {
    return (
        <>
            <h1 className='text-center'>Marvel Comics</h1>
            <br />
            
            <HeroList publisher='Marvel Comics' />
        </>
    )
};

export default MarvelPage;
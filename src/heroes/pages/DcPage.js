import React from 'react';
import HeroList from '../components/HeroList';

const DcPage = () => {
    return (
        <>
            <h1 className='text-center'>DC Comics</h1>
            <br />

            <HeroList publisher='DC Comics' />
        </>
    )
};

export default DcPage;
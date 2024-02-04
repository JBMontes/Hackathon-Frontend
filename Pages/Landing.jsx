import React from 'react';
import { useState } from 'react';
import GateKeyFeed from '../src/Components/GateKeyFeed';
import FetchLocation from '../src/Components/FetchLocation';
import CreateCard from './Form';
const LandingPage = () => {
    const [searchLocation, setSearchLocation] = useState('');
    return (
        <>
            <CreateCard />
            <FetchLocation />
            <GateKeyFeed />
        </>
    );
};
export default LandingPage;










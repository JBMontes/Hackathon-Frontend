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
            <h1>New GateKeys Added!</h1>
            <GateKeyFeed />
        </>
    );
};
export default LandingPage;










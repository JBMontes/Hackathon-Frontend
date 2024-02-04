import React from 'react';
import bethPic from '../public/Bethany.png'
import christPic from '../public/Christine.png'
import jermPic from '../public/Jeremy.png'
import jackPic from '../public/Jackie.png'
import shakPic from '../public/Shaka.png'


const AboutPage = () => {
    return (
        <div className="AboutPage">
            <img src={bethPic} alt="Profile" width="150" height="150" />
            <img src={christPic} alt="Profile" width="150" height="150" />
            <img src={jermPic} alt="Profile" width="150" height="150" />
            <img src={jackPic} alt="Profile" width="150" height="150" />
            <img src={shakPic} alt="Profile" width="150" height="150" />
            <p>2024 GateKey Registered Trademark ™️</p>
        </div>
    );
}

export default AboutPage;
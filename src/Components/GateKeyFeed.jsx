import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GateKeyCard from './GateKeyCard';
const API = 'https://hackathon-backend-blmb.onrender.com';


function GateKeyFeed() {
   const [gateKeyCards, setGateKeyCards] = useState([]);
   const [displayedKeyCards, setDisplayedKeyCards] = useState(2);


   const fetchData = async () => {
       try {
           fetch(`${API}/keypins`)
               .then((res) => res.json())
               .then((res) => {
                   setGateKeyCards(res);
               });
       } catch (error) {
           return error;
       }
   };


   useEffect(() => {
       fetchData();
   }, []);


   const loadMore = () => {
       setDisplayedKeyCards(displayedKeyCards + 2);
   };


   return (
       <div className="GateKeyCards">
           <section>
               <div className="GateKeyCards-container">
                   {gateKeyCards.slice(0, displayedKeyCards).map((gateKeyCard) => (
                       <div key={gateKeyCard.id} className="gatekey-card">
                               <h1>{gateKeyCard.name}</h1>
                           <p>Location: {gateKeyCard.address}</p>
  
                           <button>
                               <Link to={`/keypins/${gateKeyCard.id}`}>View Details</Link>
                           </button>
                       </div>
                   ))}
               </div>
           </section>
           {displayedKeyCards < gateKeyCards.length && (
               <button onClick={loadMore}>Load More</button>
           )}
       </div>
   );
}


export default GateKeyFeed;
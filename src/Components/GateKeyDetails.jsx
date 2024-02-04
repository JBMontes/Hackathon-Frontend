import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
const API = 'https://hackathon-backend-blmb.onrender.com';
function GateKeyDetails() {
   const [gateKeyCard, setGateKeyCard] = useState({
       name: '',
       address: '',
       color: '',
       comment: '',
   });
   const [comments, setComments] = useState([]);
   const [newComment, setNewComment] = useState('');
   let navigate = useNavigate();
   let { id } = useParams();
   useEffect(() => {
       const fetchGateKeyCard = async () => {
           try {
               const response = await fetch(`${API}/keypins/${id}`);
               const data = await response.json();
               setGateKeyCard(data);
           } catch (error) {
               console.error(error);
           }
       };
       fetchGateKeyCard();
   }, [id]);
   useEffect(() => {
       const storedGateKeyComments = localStorage.getItem(`gateKeyCardComment_${id}`);
       const parsedGateKeyComments = storedGateKeyComments
           ? JSON.parse(storedGateKeyComments)
           : [];
       setNewComment(parsedGateKeyComments);
   }, [id]);
   const handleDelete = async () => {
       try {
           await fetch(`${API}/keypins/${id}`, {
               method: 'DELETE',
           });
           navigate('/keypins');
       } catch (error) {
           console.error(error);
       }
   };
   const handleAddComment = () => {
       const updatedComments = [...comments, newComment];
       setComments(updatedComments);
       localStorage.setItem(`gateKeyCardComment_${id}`, JSON.stringify(updatedComments));
       setNewComment('');
   };
   return (
       <div className="gatekey-details">
               <h1>{gateKeyCard.name}</h1>
           <h1>Location: {gateKeyCard.address}</h1>
           <p>
               Location Color Theme:{' '}
               <span style={{ color: gateKeyCard.color }}>
                   {gateKeyCard.color.toUpperCase()}
               </span>
           </p>
           <p>"{gateKeyCard.comment}"</p>
           <div className="showNavigation">
               <div>
                   <Link to={`/keypins/${id}/edit`}>
                       <button>Edit</button>
                   </Link>
                   <button onClick={handleDelete}>Delete</button>
               </div>
               <div>
                   <Link to={`/keypins`}>
                       <button>Back to Gatekeys</button>
                   </Link>
               </div>
           </div>
           <div className="gateKeyCardComment">
               <h2>Comments</h2>
               <ul>
                   {comments.map((userComment, index) => (
                       <li key={index}>{userComment}</li>
                   ))}
               </ul>
               <hr />
               <label htmlFor="reason">People Are Saying:</label>
               <input
                   type="text"
                   id="userComment"
                   value={newComment}
                   onChange={(event) => setNewComment(event.target.value)}
               />
               <br />
               <button onClick={handleAddComment}>Add New Comment</button>
           </div>
       </div>
   );
}
export default GateKeyDetails;



















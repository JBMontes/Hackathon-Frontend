
import { Link } from "react-router-dom";

function GateKeyCard ({ gateKeyCard }) {
 return (
   <tr>
     <td>
       <Link to={`/keypins/${gateKeyCard.id}`}>{gateKeyCard.name}</Link>
     </td>
     <td>{gateKeyCard.name}</td>
     <td>{gateKeyCard.address}</td>
     <td>{gateKeyCard.comment}</td>
     <td style={{ color: gateKeyCard.color }}>{gateKeyCard.color} </td>
   </tr>
 );
}


export default GateKeyCard;
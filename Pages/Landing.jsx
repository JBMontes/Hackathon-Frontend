import React from "react";
import { useState } from "react";

const LandingPage=()=>{

    const [searchLocation,setSearchLocation]=useState("")


return (<>
    <h1>Header/nav Goes at Top of Page</h1>

{/* <FormData/> */}//Shaqualas input Form Goes Here

ex. <form>
    <input type="text" value={searchLocation}  onChange={(e)=>
    {setSearchLocation(e.target.value)}}placeholder="Search For a Location" />
    </form>

    <button>post/Posted</button>


        <div id="feed">



            Back End Feed Goes Here!!!!!


        </div>


</>)





}
export default LandingPage
import React, { useState } from 'react';

const CreateCard = () => {
    const [name,setName]=useState('')
    const [color,setColor]=useState('')
    const [address, setAddress]=useState('')
    const [comment,setComment]=useState('')
    
    const fetchData = async () => {
        const API = import.meta.env.VITE_BASE_URL;
        const formData={
            
            name:name,
            address:address,
            color:color,
            comment:comment
            }
        
        console.log(formData)
    try {
      const response = await fetch(`${API}`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`Request failed with the status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = () => {
    fetchData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePost();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name:</label>
        <input id="name" value={name} type="text" onChange={(e)=>{setName(e.target.value)}}  />
        <br />
        <label htmlFor="color">Color:</label>
        <input id="color" value={color} type="text" onChange={(e)=>{setColor(e.target.value)}}  />
        <label htmlFor="address">Address:</label>
        <input id="address"  value={address}type="text" onChange={(e)=>{setAddress(e.target.value)}}  />
        <br />
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment"  value={comment}type="text" onChange={(e)=>{setComment(e.target.value)}}></textarea>
        <br />
        <button type="submit">Create Post</button>
        <br />
      </form>
    </>
  );
};

export default CreateCard;
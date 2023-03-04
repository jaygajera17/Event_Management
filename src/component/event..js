import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
function EventManagement() {
  const [events, setEvents] = useState([]);
 
  useEffect(() => {
   fetch('https://localhost:7015/api/Events')
   
  .then(response => response.json())
      .then(data => setEvents(data));
  }, []);
  const Register = async (eventName) => {
   const newevent={
      eventName,
      username
    }
    try {
      const response = await fetch(
        "https://localhost:7015/api/Joins",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
            },
            
            body: JSON.stringify(newevent),
          });
          
      console.log(response);
      window.location.reload();

      
    } catch (error) {
      console.log(error);
    }
   alert(`${username} you are successfully register for ${eventName} event`);
  };


  const username = localStorage.getItem('username');

// console.log(windows.Access-Control-Allow-Origin)
  return (
    <div>
      <div className="centered">
      <h3> welcome  to the {username} </h3>
      </div>
      
      <ul>
        {events.map((event) => (
           
             <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <h2 className="card-header">{event.eventName}</h2>
        <div className="card-details">
          <span className="card-date">{event.eventDate}</span>
          <span className="card-duration">{event.eventDuration}</span>
        </div>
        <p className="card-description">{event.eventDescription}</p>
        <button className="card-button" onClick={()=>Register(event.eventName)}>Register Now</button>
      </div>
    </div>
           
        ))}
      </ul>
    </div>
  );
}

export default EventManagement;

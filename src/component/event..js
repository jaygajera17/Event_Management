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
        <button className="card-button">Register Now</button>
      </div>
    </div>
           
        ))}
      </ul>
    </div>
  );
}

export default EventManagement;

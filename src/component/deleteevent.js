import React, { useState, useEffect } from 'react';
import './style.css';
function Deleteevent() {
  const [events, setEvents] = useState([]);
  
  const fetchEvents = async () => {
    await fetch('https://localhost:7015/api/Events',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },

    })
      .then((response) => response.json())
      .then((data) => setEvents(data));
  };

  const Deleteevent = async (eventId) => {
    await fetch(`https://localhost:7015/api/Events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    fetchEvents();
  };

     
    
   



//   const handleDeleteEvent = (eventIdToDelete) => {
//     const updatedEvents = events.filter(
//       (event) => event.eventId !== eventIdToDelete
//     );
//     setEvents(updatedEvents);
//   };
 
// console.log(windows.Access-Control-Allow-Origin)
  return (
    <div>
      <h1>Evento</h1>
      
      <button onClick={fetchEvents}>fetch Event</button>
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
      <button className="card-button" onClick={() => Deleteevent(event.eventId)}>DELETE</button>
    </div>
  </div>
         
      ))}
      </ul>
    </div>
  );
}

export default Deleteevent;
{/* <button onClick={() => Deleteevent(event.eventId)}>Delete</button> */}
import React, { useState, useEffect } from 'react';
import './style.css';
import UpdateEventForm from './UpdateEventForm';
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

  useEffect(() => {
    fetchEvents();
  }, []);

  const Deleteevent = async (eventId) => {
    await fetch(`https://localhost:7015/api/Events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    // fetchEvents();
  };

  // const Updateevent = async (eventId) => {
  //   await fetch(`https://localhost:7015/api/Events/${eventId}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   });
  //   fetchEvents();
  // };
 
  const [currentEvent, setCurrentEvent] = useState();

   const handleUpdateClick = (event) => {
    setCurrentEvent(event);
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
      {currentEvent && (
  <UpdateEventForm
    event={currentEvent}
    onUpdate={(eventId, updatedEvent) => {
      // Call your update API here
     try {
        const response = fetch(`https://localhost:7015/api/Events/${eventId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',

          },
          body: JSON.stringify(updatedEvent),
          
        });
        
        
        // onUpdate(event.eventId, updatedEvent);
        console.log(response);
        if (response.ok) {
         // onUpdate(event.eventId, updatedEvent);
        } else {
          console.log("Update failed");
        }
      } catch (error) {
        console.log(error);
      }
    }}
  />
)}

      
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
      <button className="card-button mx-3" onClick={() => Deleteevent(event.eventId)}>DELETE</button> 
      <button className="card-button" onClick={() => handleUpdateClick(event)}>Update</button>
    
    </div>
  </div>
         
      ))}
      </ul>
    </div>
  );
}

export default Deleteevent;
{/* <button onClick={() => Deleteevent(event.eventId)}>Delete</button> */}
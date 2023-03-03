import React,{useState} from "react";


function Addevent() {
const [eventName, seteventName] = useState("");
const [eventDescription, seteventDescription] = useState("");
const [eventLocation, seteventLocation] = useState("");
const [eventDate, seteventDate] = useState("");
const [eventDuration, seteventDuration] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();
    const newevent = {
      eventName,
      eventDescription,
      eventLocation,
      eventDate,
      eventDuration,
    };
    try {
      const response = await fetch(
        "https://localhost:7015/api/events",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
            },
            
            body: JSON.stringify(newevent),
          });
          
      console.log(response);
      alert("Event Added Successfully");
      window.location.reload();

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
         <form onSubmit={handleSubmit} className="event-form" >
         <div className="form-group">
         <label htmlFor="eventName">Event Name:</label>
       
        
        <input
          type="text"
          value={eventName}
          onChange={(e) => seteventName(e.target.value)}
        /> </div>
         <div className="form-group">
      <label htmlFor="eventDescription"> 
        event Description:</label>
        <textarea
          value={eventDescription}
          onChange={(e) => seteventDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
      <label htmlFor="eventLocation">
        event Location: </label>
        <input
          type="text"
          value={eventLocation}
          onChange={(e) => seteventLocation(e.target.value)}
        />
      
      </div>
      <div className="form-group">

      <label htmlFor="eventdate">
        event Date: </label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => seteventDate(e.target.value)}
        />
        </div>
        <div className="form-group">
      <label htmlFor="eventDuration" >
        event Duration:</label>
        <input
          type="text"
          value={eventDuration}
          onChange={(e) => seteventDuration(e.target.value)}
        />
      
      </div>
      <button type="submit">Create event</button>
    </form>
    </div>
  );
}

export default Addevent;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

function UpdateEventForm({ event, onUpdate }) {
    const [eventId, setEventId] = useState(event.eventId);
    const [eventName, setEventName] = useState(event.eventName);
    const [eventDate, setEventDate] = useState(event.eventDate);
    const [eventDuration, setEventDuration] = useState(event.eventDuration);
    const [eventDescription, setEventDescription] = useState(event.eventDescription);
    const [eventLocation, seteventLocation] = useState(event.eventLocation);
  
    const handleSubmit = async (e) => {
      const updatedEvent = {
        eventId,
        eventName,
        eventDate,
        eventDuration,
        eventDescription,
        eventLocation,
      };
      onUpdate(event.eventId,updatedEvent);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <label>
          Event Date:
          <input type="text" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <label>
          Event Duration:
          <input type="text" value={eventDuration} onChange={(e) => setEventDuration(e.target.value)} />
        </label>
        <label>
          Event Description:
          <input type="text" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </label>
        <label>
            Event Location:
            <input type="text" value={eventLocation} onChange={(e) => seteventLocation(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    );
  }
  
  export default UpdateEventForm;
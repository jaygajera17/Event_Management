import React from "react";
import { useState, useEffect } from "react";


const EventCard = ({ event }) => {

    const [events, setEvents] = useState([]);

  useEffect(() => {
   fetch('https://localhost:7015/api/Events')
   
  .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

    return (
        <div className="card">
        <div className="content">
            <div className="header">{event.eventName}</div>
            <div className="meta">{event.eventDate}</div>
            <div className="description">{event.eventDescription}</div>
        </div>
        <div className="extra content">
            <span className="right floated">Joined in 2013</span>
            <span>
            <i className="user icon"></i>
            75 Friends
            </span>
        </div>
        </div>
    );
    };
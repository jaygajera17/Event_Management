import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function UserEvent(){
    const[Users,setUsers]=useState([]);
    const username = localStorage.getItem('username');

    const fetchUser = async () => {
        const response = await fetch('https://localhost:7015/api/Joins', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const data = await response.json();
    // setUsers(data);
    const registeredEvents= data.filter((Users) => Users.userName === username);
    console.log(registeredEvents);
    setUsers(registeredEvents);
    };

    useEffect(() => {
        fetchUser();
    }
    , []);

    const Deleteevent = async (eventId) => {
        await fetch(`https://localhost:7015/api/Joins/${eventId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        window.location.reload();
    
      }
    return(
        <div>
            <h1>Events</h1>
        <table>
    <thead>
        <tr>
            <th>Event Name</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {Users.map((event) => (
        <tr>
            <td>{event.eventName}</td>
            <td><button className="card-button" onClick={() => Deleteevent(event.u_Id)}>Delete</button></td>
        </tr>
        ))}
    </tbody>

        </table>
        </div>
    )
    




}
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
<div
      style={{
        height: '100vh',
        backgroundImage: `url(https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg?w=1060&t=st=1677861909~exp=1677862509~hmac=f1c90f6667088daeffc3a871b85bf9e0319eeb9699f5c55da9e29f452affe002)`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

<div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '50px' }}>
          Welcome to the Event Management System!
        </h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
         
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <Link
              to="/addevent"
              style={{
                color: 'white',
                backgroundColor: '#0077b6',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Add Event
            </Link>
          </li>
          <li style={{ display: 'inline-block',marginRight: '20px' }}>
            <Link
              to="/deleteevent"
              style={{
                color: 'white',
                backgroundColor: '#0077b6',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Manage Event
            </Link>
          </li>
          <li style={{ display: 'inline-block' }}>
            <Link
              to="/joined"
              style={{
                color: 'white',
                backgroundColor: '#0077b6',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Participant
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

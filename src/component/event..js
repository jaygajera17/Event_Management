import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import '../1.jpg'
import './style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import ChatbotPopup from './chatbot';

 function EventManagement() {
  const [events, setEvents] = useState([]);
   const [user, setUser] = useState([]);
   const [filteredevents, setFilteredEvents] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [doubt, setDoubt] = useState([]);
   const [outputResult, setOutputResult] = useState([]);

  const getuser = async () => {
   
    try{
      const response1 = await fetch("https://localhost:7015/api/Users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
      });
      const data = await response1.json();
      setUser(data);
    }
    catch(err){
      console.log(err);
    }

    
   
  }
  useEffect(() => {
    getuser();
  }, [])


  const fetchevent = async () => {
    const response = await fetch('https://localhost:7015/api/Events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json()
    setEvents(data)
    setFilteredEvents(data)
  };

  useEffect(() => {
    fetchevent();
  }, []);


  // useEffect(() => {
  //   fetch('https://localhost:7015/api/Events')
  //     .then(response => response.json())
  //     .then(data => setEvents(data));
  // }, []);

  const isOrganizer = user.find(
    (record) => record.userName === localStorage.getItem('username') && record.isOrganiser === true
  );

  // const response1 = await fetch(
  //   "https://localhost:7015/api/Users",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   }
  // );
  // const data1 = await response1.json();
  // const username1 = localStorage.getItem('username');
  // const isOrganizer = data1.find(
  //   (record) => record.userName === username1 && record.isOrganizer === true
  // );
    

  const Register = async (eventName) => {
    const newevent={
      eventName,
      username,
      contactnumber
    }
    

    try {
      // Retrieve all join records
      const response = await fetch(
        "https://localhost:7015/api/Joins",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      // const response1 = await fetch(
      //   "https://localhost:7015/api/Users",
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       'Access-Control-Allow-Origin': '*',
      //     },
      //   }
      // );
  
      const data = await response.json();
  
      // Check if user has already registered for the event
      const existingRecord = data.find(
        (record) => record.eventName === eventName && record.userName === username
      );
      // const data1 = await response1.json();
      // const isOrganizer = data1.find(
      //   (record) => record.userName === username && record.IsOrganiser
      // );
      // console.log(isOrganizer);
      
  
      if(existingRecord) {
        alert(`${username}, you have already registered for ${eventName} event`);
        return;
      }
  
      // Register user for the event
      const registerResponse = await fetch(
        "https://localhost:7015/api/Joins",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(newevent),
        }
      );
  
      console.log(registerResponse);
      alert(`${username} you are successfully registered for ${eventName} event`);
    } catch (error) {
      console.log(error);
    }
   
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredData = events.filter((event)=>{
      return event.eventName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredEvents(filteredData);
  };



  const username = localStorage.getItem('username');
  const contactnumber = localStorage.getItem('contactnumber');
 
  const handledoubtchange = (e) => { 
    setDoubt(e.target.value);
  };
  const handledoubt = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:7015/api/OpenAI/UseChatGPT?doubt=${doubt}`);
      const data =await response.text();
      console.log(data);
      setOutputResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };
  // const handleclosePopup = () => {
  //   setIsOpen(isOpen);
  // };


  return (
    <div>
      <div>
      {!isOpen && (
       <div className="chatbot-icon" onClick={handleTogglePopup}>
                       <img src={require(`./chatbot.png`)} alt="Chatbot Icon" />
                       

     </div>
      )}
      {isOpen && (
        
        <div className="chatbot-icon" onClick={handleTogglePopup}>
          <img src={require(`./chatbot.png`)} alt="Chatbot Icon" />
          <ChatbotPopup />
        </div>
      )}
      </div>
    {/* <Navbar /> */}
    <div className="centered">
      <div className="d-flex align-items-center justify-content-between">
        <h3>Welcome {username}</h3>
        <div className='input-group ml-5'>
          <div className="form-outline">
            <input type="search" className='form-control' style={{ width: 500 }} placeholder="search event" onChange={handleSearch} />
          </div>
          <button id="search-button" type="button" className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <br />
      {isOrganizer && (
        <button className='card-button' onClick={() => window.location.href='/addevent'}>Add Event</button>
      )}
      <br />
      <NavLink className='card-button mx-3' to="/myevents">My Events</NavLink>
      

    </div>

    <ul>
      {filteredevents.map((event, index) => (
        <div className="card">
          <div className="card-image">
            <img src={require(`./${index + 1}.jpg`)} style={{ width: 300, height: 300 }} alt={`Image for ${event.eventName}`} />
           
          </div>
          <div className="card-content">
            <h2 className="card-header">{event.eventName}</h2>
            <div className="card-details">
              <span className="card-date">{event.eventDate}</span>
              <span className="card-duration">{event.eventDuration}</span>
            </div>
            <p className="card-description">{event.eventDescription}</p>
            <button className="card-button" onClick={() => Register(event.eventName)}>Register Now</button>
          </div>
        </div>
      ))}
    </ul>
    {/* <form onSubmit={handledoubt}>
        <input type="text" value={doubt} placeholder="Enter your doubt" onChange={handledoubtchange} />
        <button type="submit">Submit</button>
      </form> */}
      {/* <div>{outputResult}</div> */}
      {/* <div dangerouslySetInnerHTML={{ __html: outputResult }}></div> */}
   
  </div>
  
  
  );
}
 
export default EventManagement;

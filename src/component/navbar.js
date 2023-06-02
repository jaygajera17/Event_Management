import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

var iconstyle = {
    marginleft: "10px",
    textDecoration: "none"
  }
  var title = {
    // color: "lightgreen",
    color: "#0D6EFD",
  }

export default function Navbar() {

    const [loginStatus, setLoginStatus] = useState(false);

    const username = localStorage.getItem('username');
    const isLoggedin = () => {
        if (localStorage.getItem('username') !== null) {
    
          setLoginStatus(true);
        }
      }
    
    return (
        <div>
         
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

          
        </div>
    )}
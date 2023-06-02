import React,{useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";
import './style.css'
import { NavLink } from "react-router-dom";

function Login(){
    const[user,setuser]=useState([]);
    const[credentials,setcredentials]=useState({userName:"",password:""});
    const navigate=useNavigate();
   
    

  const getuser = async () => {
    await fetch("https://localhost:7015/api/Users", {
      method: "GET"
    }).then(response => response.json()).then(data => {setuser(data); } )
    
   
  }

    const handlesubmit = async (e) => {
        e.preventDefault();
        var isuser=false;
        user.map((e) => {

           
             if (e.userName=== credentials.userName && e.password === credentials.password) {
                isuser=true;
                localStorage.setItem('username', e.userName);

                navigate("/fetchEvent"); 
            }
           
        }) 
        // console.log(credentials.userName);
        // console.log(credentials.password);
        if(credentials.userName=== "admin" && credentials.password=== "admin")
            {
                navigate("/adminhome");
            }
        else if(!isuser){
            alert("Invalid Credentials");
        }
        
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    useEffect(() => {
      getuser();
    }, [])
    


    
    return(
        <div>
        <div>

            {/* <form onSubmit={handlesubmit} className="event-form">
                <div className="form-group">
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        name="userName"
                       
                        onChange={onChange}
                    />


                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        
                        onChange={onChange}
                    />
                </div>
                <button type="submit">Login</button> */}

                {/* <input type="text" name="userName"  onChange={onChange} placeholder="Enter Name" required/>
                <input type="password" name="password" onChange={onChange} placeholder="Enter Password" required/>
                <button type="submit">Login</button> */}
            {/* </form> */}

            <div className="bg-img">

<div className="content">

  <header style={{ color: 'black' }}> Login</header>
  <form onSubmit={handlesubmit} method='post'>
    <div className="field">
      <span className="fa fa-user"></span>
      <input type="text" onChange={onChange} name='userName' required placeholder="username" />
    </div>
    <div className="field space">
      <span className="fa fa-lock"></span>
      <input type="password" onChange={onChange} name='password' className="pass-key" required placeholder="Password" />
    </div>
    <div className="pass">
      {/* <p>Forgot Password?</p> */}
    </div>
    <div className="field my-2">
      <button type="submit"
        value="Login"  >Login </button>
    </div>
  </form>
  <div className="signup">Don't have account?
    <NavLink to="/register">Signup Now</NavLink>
  </div>
</div>
</div>
        </div>
        </div>
    )

}

export default Login;

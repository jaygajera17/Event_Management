import React,{useState} from "react";
import { redirect,useNavigate } from "react-router-dom";
import './register.css'    
import { NavLink } from "react-router-dom";

function Register() {
    const [UserEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [contactNumber,setcontactNumber]=useState("");
    const [IsOrganiser,setIsOrganiser]=useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newuser = {
            UserEmail,
            password,
            username,
            contactNumber,
            IsOrganiser
        };
        try {
            const response = fetch("https://localhost:7015/api/Users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(newuser),
            });
            console.log(response);
            alert("User Register Successfully");
                navigate("/fetchevent");
            
            localStorage.setItem('username', username);
            localStorage.setItem('contactnumber',contactNumber);

            // navigate('/fetchevent');

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const handleOrganizer = (e) => {
        setIsOrganiser(e.target.value === 'true');
    }


    return (
        <div>
              
      {/* <h3> Register/Login </h3>
      </div>
            <form onSubmit={handleSubmit} className="event-form" >
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
       */}
       
       <div className="bg-img">
        <div className="contentR">
          <header style={{ color: 'black' }}>Register</header>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <span className="fa fa-user"></span>
              <input type="text" name='name' value={username}
                onChange={(e) => setUsername(e.target.value)} required placeholder="Name" />
            </div>
            <div className="field space">
              <span className="fa fa-user"></span>
              <input type="email" name='email' value={UserEmail}
                onChange={(e) => setUserEmail(e.target.value)} required placeholder="Email " />

            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}
 className="pass-key" required placeholder="Password" />
            </div>
            <div className="field space">
                <span className="fa fa-phone"></span>
                <input type="number" name='number' value={contactNumber} onChange={(e)=> setcontactNumber(e.target.value)}
                  required placeholder="contact number" />
            </div>
            <div className="">

           <label>
            <input type="radio" name="organizer" value="true" checked={IsOrganiser} onChange={handleOrganizer} />
            Organizer
           </label>
           <label>
            <input type="radio" name="!organizer" value="false" checked={!IsOrganiser} onChange={handleOrganizer} />
            Attendee
           </label>
           </div>

            <div className="pass">
              {/* <a href='/'>Forgot Password?</a> */}
            </div>
            <div className="field">
              <button type="submit"
                value="Register"  >Register</button>
            </div>
            
          </form>
          <div className="signup">Already Have Acount?
            <NavLink to="/login">Sigin Now</NavLink>
          </div>
        </div>
      </div>
       
        </div> 
    );


}

export default Register;
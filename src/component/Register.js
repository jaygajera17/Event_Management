import React,{useState} from "react";
import { redirect,useNavigate } from "react-router-dom";

function Register() {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [city, setCity] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newuser = {
            email,
            password,
            username,
            city,
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
            if(username == "admin" && password == "admin"){
                navigate('/adminHome');
            }
            else
            {
                redirect("/fetchvents");
            }
            localStorage.setItem('username', username);

            // navigate('/fetchevent');

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
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
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );


}

export default Register;
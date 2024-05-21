import React, { useState,createContext } from "react";
import "./login.css";
import { useNavigate  } from 'react-router-dom';
import MyContext from "./context";
import Header from "./header";

const Login = () => {
    
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = async() => {
    try {
        const response = await fetch("https://rentifyapi.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          mobile: password,
        }),
      });
      const data = await response.json();
      console.log(data.data[0]);
      if(data.sucess){
        
        setUser(data.data)
        navigate('/feed', { state: { user: data.data } });
      }
    } catch (error) {
        console.log(error)
    }
  };

  const handleSignup=async()=>{
    try {
        const response = await fetch("https://rentifyapi.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email:email,
          mobile:mobile,
        }),
      });
      const data = await response.json();
      if (data.sucess){
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
          }, 3000); 
      }
    } catch (error) {
        
    }
  }

  return (
    <MyContext.Provider value={user}>
      <><Header/>
    <div className="container">
      
        {showAlert && (
        <div className="alert">
          Signup successful! You can now login.
        </div>
      )}
      <div className="box">
        <div className="login">
          <h1>Login</h1>

          <div className="input">
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="button" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="signup">
          <h1>Signup</h1>

          <div className="input">
            <input
              type="text"
              id="FirstName"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              id="LastName"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              id="mobile"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
    </>
    </MyContext.Provider>
  );
};

export default Login;

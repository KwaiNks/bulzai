import React, { useState } from "react";
import { Button,Input} from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
        navigate("/");
      }
    });
  }

  const goToSignupPage = () => navigate("/signup");

  return (
    <div className="loginpage">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="logininputs">
          <label htmlFor="username">Username</label>
          <Input  type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            icon='user' 
            iconPosition='left' 
            placeholder='Username...' 
            />
      
          <label htmlFor="password">Password</label>
          <Input type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            icon='key'
            iconPosition='left'  placeholder="Password..."/>
       
          <Button type="submit">Login</Button>
        </div>

        <p>
          Don't have an account?{" "}
          <span className="lowlink" onClick={goToSignupPage}>
            {" "}
            Sign up{" "}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
